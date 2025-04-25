'use server'
import { redirect } from 'next/navigation'
import { ulid } from 'ulid'
import { createServerClient } from '@/lib/supabase/server'
import { TUserAuthSchema, userAuthSchema } from '@/lib/validators/loginValidator'

export const CreateOrLoginEmailUser = async (userdata: TUserAuthSchema) => {
  const { data, success, error } = userAuthSchema.safeParse(userdata)
  if (!success) {
    return error.message
  }
  const client = await createServerClient()
  const { data: Sdata } = await client.auth.getSession()

  if (Sdata.session?.user) {
    redirect('/dashboard')
  }
  const dbUser = await client.from('profiles').select('email').eq('email', data.email)

  if (dbUser.count) {
    const { data: logData, error } = await client.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      return `Invalid password`
    }
    redirect('/dashboard')
  }

  const { data: newUser, error: NewUserError } = await client.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (NewUserError) {
    console.log('[ERROR-AUTH]', NewUserError)
    return "Couldn't create user login"
  }

  console.log('[CREATED USER]:', newUser)
  redirect('/dashboard')
}
const GUEST_EMAIL_PREFIX = '@guest.busycomputer.com'
export const loginAsGuest = async () => {
  const client = await createServerClient()
  const id = ulid()
  const email = `${id}${GUEST_EMAIL_PREFIX}`
  const { error } = await client.auth.signUp({
    email: email,
    password: id,
  })
  if (error) {
    console.log('[ERROR-AUTH]', error)
    return "Couldn't create user login"
  }

  redirect('/dashboard')
}
