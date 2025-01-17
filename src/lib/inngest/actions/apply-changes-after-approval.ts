import { EngineAction } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'
import { inngest } from '@/lib/inngest'

export const applyChangesAfterApproval: EngineAction<typeof inngest> = {
  // Apply changes after approval
  kind: 'wait_for_approval',
  name: 'Apply changes after approval',
  description: 'Request approval for changes',
  handler: async ({ event, step }) => {
    // const supabase = await createServerClient()
    //
    // const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))
    //
    // await step.run('update-blog-post-status', async () => {
    //   await supabase
    //     .from('blog_posts')
    //     .update({
    //       status: 'needs approval',
    //     })
    //     .eq('id', event.data.id)
    //     .select('*')
    // })
    //
    // const approval = await step.waitForEvent('wait-for-ai-suggestion-approval', {
    //   event: 'blog-post.approve-ai-suggestions',
    //   timeout: '1d',
    //   match: 'data.id',
    // })
    //
    // if (!approval) {
    //   await step.run('discard-ai-revision', async () => {
    //     await supabase
    //       .from('blog_posts')
    //       .update({
    //         markdown_ai_revision: null,
    //         status: 'draft',
    //       })
    //       .eq('id', event.data.id)
    //       .select('*')
    //   })
    // } else {
    //   await step.run('apply-ai-revision', async () => {
    //     await supabase
    //       .from('blog_posts')
    //       .update({
    //         markdown: blogPost.markdown_ai_revision,
    //         markdown_ai_revision: null,
    //         status: 'published',
    //       })
    //       .eq('id', blogPost.id)
    //       .select('*')
    //   })
    // }
  },
}
