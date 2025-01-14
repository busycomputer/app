import { notFound } from 'next/navigation'
import { AutomationEditor } from '@/components/automation-editor'
import { createServerClient } from '@/lib/supabase/server'
import { Workflow as SupabaseWorkflow } from '@/lib/supabase/types'

export const runtime = 'edge'

export default async function Automation(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const supabase = await createServerClient()
  let workflow: SupabaseWorkflow | null = null

  try {
    const { data } = await supabase
      .from('workflows')
      .select('*')
      .eq('id', Number(params.id)!)
      .single()

    if (data) {
      workflow = data as SupabaseWorkflow
    }
  } catch (error) {
    console.error('Error getting workflow:', error)
  }

  if (workflow) {
    return <AutomationEditor workflow={workflow} />
  } else {
    notFound()
  }
}
