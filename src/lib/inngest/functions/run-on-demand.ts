import { Engine } from '@inngest/workflow-kit'
import { loadSupabaseWorkflow } from '@/lib/inngest/loaders/load-supabase-workflow'
import { inngest } from '@/lib/inngest/client'
import { actionsWithHandlers } from '@/lib/inngest/workflowActionHandlers'
import { EVENT_RUN_ON_DEMAND, FUNCTION_RUN_ON_DEMAND } from '@/lib/constants'

const workflowEngine = new Engine({
  actions: actionsWithHandlers,
  loader: loadSupabaseWorkflow,
})

export default inngest.createFunction(
  { id: FUNCTION_RUN_ON_DEMAND },
  { event: EVENT_RUN_ON_DEMAND },
  async ({ event, step }) => {
    // When `run` is called, the loader function is called with access to the event
    await workflowEngine.run({ event, step })
  }
)
