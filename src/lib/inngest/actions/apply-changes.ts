import { EngineAction } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'
import { inngest } from '@/lib/inngest'

export const applyChanges: EngineAction<typeof inngest> = {
  // Apply changes
  kind: 'apply_changes',
  name: 'Apply changes',
  description: 'Save the AI revisions',
  handler: async ({ event, step }) => {
    // const supabase = await createServerClient()
    //
    // const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))
    //
    // await step.run('apply-ai-revision', async () => {
    //   await supabase
    //     .from('blog_posts')
    //     .update({
    //       markdown: blogPost.markdown_ai_revision,
    //       markdown_ai_revision: null,
    //       status: 'published',
    //     })
    //     .eq('id', blogPost.id)
    //     .select('*')
    // })
  },
}
