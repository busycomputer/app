'use server'

import { createServerClient } from '@/lib/supabase/server'

export const toggleWorkflow = async (workflowId: string, enabled: boolean) => {
  const supabase = await createServerClient()
  // await supabase
  //   .from('workflows')
  //   .update({
  //     enabled,
  //   })
  //   .eq('id', workflowId)
  //   .select('*')
}
