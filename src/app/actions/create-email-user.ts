'use server'
import { createServerClient } from '@/lib/supabase/server'
import { TUserAuthSchema, userAuthSchema } from '@/lib/validators/loginValidator'
import { redirect } from 'next/navigation'

export const CreateOrLoginEmailUser = async (userdata: TUserAuthSchema) => {
  const { data, success, error } = userAuthSchema.safeParse(userdata)
  if (!success) {
    return error.message
  }
  const client = await createServerClient()
  const { data: Sdata } = await client.auth.getSession()
  console.log(Sdata)
  if (Sdata.session?.user) {
    return
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
  const { data: Nuser, error: NError } = await client.auth.admin.createUser({
    email: data.email,
    password: data.password,
    email_confirm: true,
  })
  if (NError) {
    console.log('[ERROR-AUTH]', NError)
    return "Couldn't create user login"
  }

  const { error: ExUserError } = await client.auth.signInWithPassword({
    email: Nuser.user.email!,
    password: data.password,
  })
  if (ExUserError?.message) {
    return ExUserError?.message
  }
  redirect('/dashboard')
}
