import { Engine } from '@inngest/workflow-kit'
import { availableActions, inngest } from '@/lib/inngest'
import { EVENT_RUN_ON_WEBHOOK, FUNCTION_RUN_ON_WEBHOOK } from '@/lib/constants'
// import { loadSupabaseWorkflow } from '@/lib/inngest/loaders/load-supabase-workflow'

const workflowEngine = new Engine({
  actions: availableActions,
  // loader: loadSupabaseWorkflow,
})

// Create a function to handle incoming webhooks
export default inngest.createFunction(
  { id: FUNCTION_RUN_ON_WEBHOOK },
  { event: EVENT_RUN_ON_WEBHOOK },
  async ({ event, step }) => {
    // When a webhook is received, the transform function in the Inngest dashboard
    // will convert it to our internal event format before this function runs
    await workflowEngine.run({ event, step })
  }
)
