'use server'
import { AuthError } from '@supabase/supabase-js'
import { createServerClient } from '@/lib/supabase/server'

export const createEmptyWorkflow = async () => {
  const supabase = await createServerClient()
  const user = await supabase.auth.getUser()

  if (!user.data.user) {
    throw new AuthError('Not authenticated')
  }

  // const { data } = await supabase
  //   .from('workflows')
  //   .insert({
  //     name: 'Untitled',
  //     user_id: user.data.user.id,
  //   })
  //   .returns()
  // return data
}
