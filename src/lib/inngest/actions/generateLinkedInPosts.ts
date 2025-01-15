import OpenAI from 'openai'
import { EngineAction } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'
import { loadBlogPost } from '@/lib/inngest/loaders/blog-post'
import { getAIWorkingCopy } from '@/lib/helpers/get-ai-working-copy'
import { addAIPublishingSuggestion } from '@/lib/helpers/add-ai-publishing-suggestion'
import { inngest } from '@/lib/inngest/client'

export const generateLinkedInPosts: EngineAction<typeof inngest> = {
  // Generate LinkedIn posts
  kind: 'generate_linkedin_posts',
  name: 'Generate LinkedIn posts',
  description: 'Generate LinkedIn posts',
  handler: async ({ event, step, workflowAction }) => {
    const supabase = await createServerClient()

    const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))

    const aiRecommendations = await step.run('generate-linked-posts', async () => {
      const openai = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'],
      })

      const prompt = `
        Generate a LinkedIn post that will drive traffic to the below blog post.
        Keep the a profesionnal tone, do not use emojis.

        Here is the blog post text wrapped with "\`\`\`":
        \`\`\`
        ${getAIWorkingCopy(workflowAction, blogPost)}
        \`\`\`
        `

      const response = await openai.chat.completions.create({
        model: process.env['OPENAI_MODEL'] || 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an Developer Marketing expert.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      })

      return response.choices[0]?.message?.content || ''
    })

    await step.run('save-ai-recommendations', async () => {
      await supabase
        .from('blog_posts')
        .update({
          ai_publishing_recommendations: addAIPublishingSuggestion(
            workflowAction,
            blogPost,
            `\n## LinkedIn posts: \n <br/ >${aiRecommendations}<br/ >`
          ),
        })
        .eq('id', event.data.id)
        .select('*')
    })
  },
}
