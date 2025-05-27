'use client'

import { Editor, Provider, Sidebar } from '@inngest/workflow-kit/ui'
import { SaveIcon, PlayIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import type { Workflow as InngestWorkflow } from '@inngest/workflow-kit'
import toast from 'react-hot-toast'
import type { Workflow as UserWorkflow } from '@/lib/supabase/types'
import { Button } from '@/components/ui/button'
import { updateWorkflow } from '@/app/actions/update-workflow'
import { runOnDemand } from '@/lib/inngest/triggers/run-on-demand'
import '@inngest/workflow-kit/ui/ui.css'
import '@xyflow/react/dist/style.css'
import '@/app/(protected)/dashboard/workflow/[id]/style.css'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'
import { useGetAvailableActions } from '@/hooks/use-get-available-actions'

export const WorkflowEditor = ({ userWorkflow }: { userWorkflow: UserWorkflow }) => {
  const [workflowDraft, updateWorkflowDraft] = useState<typeof userWorkflow>(userWorkflow)
  const [isSaving, setIsSaving] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const availableActions = useGetAvailableActions()

  const onSaveWorkflow = useCallback(async () => {
    setIsSaving(true)
    try {
      await updateWorkflow(workflowDraft)
      toast.success('Workflow saved successfully!')
    } catch (error) {
      console.error('Failed to save workflow:', error)
      toast.error('Failed to save workflow.')
    } finally {
      setIsSaving(false)
    }
  }, [workflowDraft])

  const onRunWorkflow = useCallback(async () => {
    setIsRunning(true)
    try {
      const result = await runOnDemand({ workflow_id: userWorkflow.id })
      if (result.success) {
        toast.success(`Workflow run triggered! Event ID: ${result.eventId}`)
      } else {
        toast.error('Failed to trigger workflow run.')
      }
    } catch (error) {
      console.error('Failed to trigger workflow run:', error)
      toast.error(
        `Failed to trigger workflow run: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    } finally {
      setIsRunning(false)
    }
  }, [userWorkflow.id])

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
        updateWorkflowDraft({
          ...workflowDraft,
          workflow: updated,
        })
      }}
    >
      <Editor direction="down">
        <div className="z-10 flex h-full flex-col items-end border-l border-border bg-surface">
          <div className="m-4 flex flex-shrink-0 flex-grow-0 gap-2">
            <Button onClick={onRunWorkflow} disabled={isRunning || isSaving} variant="outline">
              {isRunning ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin">⏳</span>
                  Running...
                </>
              ) : (
                <>
                  <PlayIcon className="mr-2 h-4 w-4" />
                  Run Workflow
                </>
              )}
            </Button>
            <Button onClick={onSaveWorkflow} disabled={isSaving || isRunning}>
              {isSaving ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin">⏳</span>
                  Saving...
                </>
              ) : (
                <>
                  <SaveIcon className="mr-2 h-4 w-4" />
                  Save
                </>
              )}
            </Button>
          </div>
          <Sidebar position="right" />
        </div>
      </Editor>
    </Provider>
  )
}
