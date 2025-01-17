import { notFound } from 'next/navigation'
import { WorkflowEditor } from '@/components/workflow-editor'
import { createServerClient } from '@/lib/supabase/server'
import { Workflow as UserWorkflow } from '@/lib/supabase/types'

export const runtime = 'edge'

export default async function WorkflowPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const supabase = await createServerClient()
  let workflow: UserWorkflow | null = null

  try {
    const { data } = await supabase.from('workflows').select('*').eq('id', params.id!).single()

    if (data) {
      workflow = data as UserWorkflow
    }
  } catch (error) {
    console.error('Error getting workflow:', error)
  }

  if (workflow) {
    return <WorkflowEditor userWorkflow={workflow} />
  } else {
    notFound()
  }
}
