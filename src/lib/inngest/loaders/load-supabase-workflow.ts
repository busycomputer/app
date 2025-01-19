import { Workflow } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'
import { Event } from '@/lib/inngest/types'

export async function loadSupabaseWorkflow(event: Event) {
  const supabase = await createServerClient()

  try {
    const { data } = await supabase
      .from('workflows')
      .select('*', {})
      .eq('trigger', event.data.workflow_id)
      .eq('enabled', true)
      .single()
    return (data && data.workflow) as unknown as Workflow
  } catch (e: any) {
    throw new Error(`Failed to load workflow: ${e?.message}`)
  }
}
