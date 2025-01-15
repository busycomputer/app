import OpenAI from 'openai'
import { EngineAction } from '@inngest/workflow-kit'
import { createServerClient } from '@/lib/supabase/server'
import { addAIPublishingSuggestion } from '@/lib/helpers/add-ai-publishing-suggestion'
import { inngest } from '@/lib/inngest/client'

export const generateTwitterPosts: EngineAction<typeof inngest> = {
  // Generate Twitter posts
  kind: 'generate_tweet_posts',
  name: 'Generate Twitter posts',
  description: 'Generate Twitter posts',
  handler: async ({ event, step, workflowAction }) => {
    // const supabase = await createServerClient()
    // const numberOfTweets = 2
    //
    // const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))
    //
    // const aiRecommendations = await step.run('generate-tweets', async () => {
    //   const openai = new OpenAI({
    //     apiKey: process.env['OPENAI_API_KEY'],
    //   })
    //
    //   const prompt = `
    //   Generate ${numberOfTweets} tweets to announce the blog post.
    //   Keep the tone friendly, feel free to use emojis, and, if relevant, use bullet points teasing the main takeaways of the blog post.
    //   Prefix each tweet with "----- Tweet number {tweet number} ----- <br/>"
    //
    //   Here is the blog post text wrapped with "\`\`\`":
    //   \`\`\`
    //   ${blogPost.markdown}
    //   \`\`\`
    //   `
    //
    //   const response = await openai.chat.completions.create({
    //     model: process.env['OPENAI_MODEL'] || 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'system',
    //         content: 'You are an Developer Marketing expert.',
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
    // await step.run('save-ai-recommendations', async () => {
    //   await supabase
    //     .from('blog_posts')
    //     .update({
    //       ai_publishing_recommendations: addAIPublishingSuggestion(
    //         workflowAction,
    //         blogPost,
    //         `\n## Twitter posts: \n <br/ >${aiRecommendations}<br/ >`
    //       ),
    //     })
    //     .eq('id', event.data.id)
    //     .select('*')
    // })
  },
}
