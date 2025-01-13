import { AutomationEditor } from '@/components/automation-editor'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export const runtime = 'edge'

export default async function Automation(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const supabase = await createClient()
  const { data: workflow } = await supabase
    .from('workflows')
    .select('*')
    .eq('id', params.id!)
    .single()
  if (workflow) {
    return <AutomationEditor workflow={workflow} />
  } else {
    notFound()
  }
}
