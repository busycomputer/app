import { Engine } from '@inngest/workflow-kit'
import { loadWorkflow } from '@/lib/loaders/workflow'
import { inngest } from '@/lib/inngest/client'
import { actionsWithHandlers } from '@/lib/inngest/workflowActionHandlers'

const workflowEngine = new Engine({
  actions: actionsWithHandlers,
  loader: loadWorkflow,
})

export default inngest.createFunction(
  { id: 'blog-post-workflow' },
  // Triggers
  // - When a blog post is set to "review"
  // - When a blog post is published
  [{ event: 'blog-post.updated' }, { event: 'blog-post.published' }],
  async ({ event, step }) => {
    // When `run` is called, the loader function is called with access to the event
    await workflowEngine.run({ event, step })
  }
)
