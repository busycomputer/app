'use client'

import { Editor, Provider, Sidebar } from '@inngest/workflow-kit/ui'
import { SaveIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import type { Workflow as InngestWorkflow } from '@inngest/workflow-kit'
import type { Workflow as UserWorkflow } from '@/lib/supabase/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { updateWorkflow } from '@/app/actions/update-workflow'
import '@inngest/workflow-kit/ui/ui.css'
import '@xyflow/react/dist/style.css'
import '@/app/(protected)/dashboard/workflow/[id]/style.css'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'
import { useGetAvailableActions } from '@/hooks/use-get-available-actions'

export const WorkflowEditor = ({ workflow }: { workflow: UserWorkflow }) => {
  const router = useRouter()
  const [workflowDraft, updateWorkflowDraft] = useState<typeof workflow>(workflow)
  const availableActions = useGetAvailableActions()

  const onSaveWorkflow = useCallback(async () => {
    await updateWorkflow(workflowDraft)
    router.push('/dashboard')
  }, [router, workflowDraft])

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Automation Editor</h2>
      </div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{workflow.name}</CardTitle>
            </div>
            <Button onClick={onSaveWorkflow}>
              <SaveIcon className="mr-2 h-4 w-4" /> Save changes
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-svh max-h-[500px]">
            <Provider
              key={workflowDraft?.id}
              workflow={workflowDraft?.workflow as InngestWorkflow}
              trigger={{
                event: {
                  name: EVENT_RUN_ON_DEMAND,
                },
              }}
              availableActions={availableActions}
              onChange={(updated) => {
                updateWorkflowDraft({
                  ...workflowDraft,
                  workflow: updated,
                })
              }}
            >
              <Editor>
                <Sidebar position="right" />
              </Editor>
            </Provider>
          </div>
          <CardFooter className="flex justify-end gap-4 align-bottom"></CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}
