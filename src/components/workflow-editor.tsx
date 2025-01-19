'use client'

import { SaveIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import type { Workflow as InngestWorkflow } from '@inngest/workflow-kit'
import { Editor, Provider, Sidebar } from '@/lib/workflow/src/ui'
import type { Workflow as UserWorkflow } from '@/lib/supabase/types'
import { Button } from '@/components/ui/button'
import { updateWorkflow } from '@/app/actions/update-workflow'
import '@inngest/workflow-kit/ui/ui.css'
import '@xyflow/react/dist/style.css'
import '@/app/(protected)/dashboard/workflow/[id]/style.css'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'
import { useGetAvailableActions } from '@/hooks/use-get-available-actions'

export const WorkflowEditor = ({ userWorkflow }: { userWorkflow: UserWorkflow }) => {
  const [workflowDraft, updateWorkflowDraft] = useState<typeof userWorkflow>(userWorkflow)
  const availableActions = useGetAvailableActions()

  const onSaveWorkflow = useCallback(async () => {
    await updateWorkflow(workflowDraft)
  }, [workflowDraft])

  return (
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
        console.log(updated)
        updateWorkflowDraft({
          ...workflowDraft,
          workflow: updated,
        })
      }}
    >
      <Editor direction="down">
        <div className="z-10 flex h-full flex-col items-end border-l border-border bg-surface">
          <Button onClick={onSaveWorkflow} className="m-4 w-fit flex-shrink-0 flex-grow-0">
            <SaveIcon className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Sidebar position="right" />
        </div>
      </Editor>
    </Provider>
  )
}
