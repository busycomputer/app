import OpenAI from 'openai'
import { ActionHandler } from '@/lib/inngest/types'
import { getServerClient } from '@/lib/supabase/server'
import { loadBlogPost } from '@/lib/loaders/blog-post'
import { getAIWorkingCopy } from '@/lib/helpers/get-ai-working-copy'

export const addToc: ActionHandler = async ({ event, step, workflowAction }) => {
  const supabase = await getServerClient()

  const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))

  const aiRevision = await step.run('add-toc-to-article', async () => {
    const openai = new OpenAI({
      apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    })

    const prompt = `
      Please update the below markdown article by adding a Table of Content under the h1 title. Return only the complete updated article in markdown without the wrapping "\`\`\`".

      Here is the text wrapped with "\`\`\`":
      \`\`\`
      ${getAIWorkingCopy(workflowAction, blogPost)}
      \`\`\`
      `

    const response = await openai.chat.completions.create({
      model: process.env['OPENAI_MODEL'] || 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an AI that make text editing changes.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    return response.choices[0]?.message?.content || ''
  })

  await step.run('save-ai-revision', async () => {
    await supabase
      .from('blog_posts')
      .update({
        markdown_ai_revision: aiRevision,
        status: 'under review',
      })
      .eq('id', event.data.id)
      .select('*')
  })
}
