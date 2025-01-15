import OpenAI from 'openai'
import { EngineAction } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'
import { getAIWorkingCopy } from '@/lib/helpers/get-ai-working-copy'
import { inngest } from '@/lib/inngest/client'

export const grammarReview: EngineAction<typeof inngest> = {
  // Perform a grammar review
  kind: 'grammar_review',
  name: 'Perform a grammar review',
  description: 'Use OpenAI for grammar fixes',
  handler: async ({ event, step, workflowAction }) => {
    // const supabase = await createServerClient()
    //
    // const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))
    //
    // const aiRevision = await step.run('get-ai-grammar-fixes', async () => {
    //   const openai = new OpenAI({
    //     apiKey: process.env['OPENAI_API_KEY'],
    //   })
    //
    //   const prompt = `
    //   You are my "Hemmingway editor" AI. Please update the below article with some grammar fixes. Return only the complete updated article in markdown without the wrapping "\`\`\`".
    //
    //   Here is the text wrapped with "\`\`\`":
    //   \`\`\`
    //   ${getAIWorkingCopy(workflowAction, blogPost)}
    //   \`\`\`
    //   `
    //
    //   const response = await openai.chat.completions.create({
    //     model: process.env['OPENAI_MODEL'] || 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'system',
    //         content: 'You are an AI that make text editing changes.',
    //       },
    //       {
    //         role: 'user',
    //         content: prompt,
    //       },
    //     ],
    //   })
    //
    //   return response.choices[0]?.message?.content || ''
    // })
    //
    // await step.run('save-ai-revision', async () => {
    //   await supabase
    //     .from('blog_posts')
    //     .update({
    //       markdown_ai_revision: aiRevision,
    //       status: 'under review',
    //     })
    //     .eq('id', event.data.id)
    //     .select('*')
    // })
  },
}
