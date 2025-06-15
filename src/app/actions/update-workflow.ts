'use server'

import type { Workflow } from '@/lib/supabase/types'
import { createServerClient } from '@/lib/supabase/server'
import { Json } from '@/lib/supabase/database.types'

export const updateWorkflow = async (workflow: Workflow) => {
  const supabase = await createServerClient()
  // await supabase
  //   .from('workflows')
  //   .update({
  //     workflow: workflow.workflow as unknown as Json,
  //   })
  //   .eq('id', workflow.id)
}
