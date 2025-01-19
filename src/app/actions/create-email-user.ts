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
    const { data: logData } = await client.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })
    return logData
  }
  console.log("[LOG]: Didn't find any user ?")
  const { data: Nuser, error: NError } = await client.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (NError) {
    console.log('[ERROR-AUTH]', NError)
    return "Couldn't create user login"
  }
  console.log('[CREATED USER]:', Nuser)
  redirect('/dashboard')
}

export const loginAsGuest = async () => {
  const client = await createServerClient()
  const { data, error } = await client.auth.signInAnonymously()

  if (error) {
    console.log('[ERROR-AUTH]', error)
    return "Couldn't create user login"
  }
  redirect('/dashboard')
}
