'use server'

import { Json } from '@/lib/supabase/database.types'
import { createServerClient } from '@/lib/supabase/server'
import { type Workflow } from '@/lib/supabase/types'

export const updateWorkflow = async (workflow: Workflow) => {
  const supabase = await createServerClient()
  await supabase
    .from('workflows')
    .update({
      workflow: workflow.workflow as unknown as Json,
    })
    .eq('id', workflow.id)
}

export const toggleWorkflow = async (workflowId: string, enabled: boolean) => {
  const supabase = await createServerClient()
  await supabase
    .from('workflows')
    .update({
      enabled,
    })
    .eq('id', workflowId)
    .select('*')
}
