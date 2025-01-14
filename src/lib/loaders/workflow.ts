import { Workflow } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'

export async function loadWorkflow(event: { name: string }) {
  const supabase = await createServerClient()
  const { data } = await supabase
    .from('workflows')
    .select('*', {})
    .eq('trigger', event.name)
    .eq('enabled', true)
    .single()
  return (data && data.workflow) as unknown as Workflow
}
