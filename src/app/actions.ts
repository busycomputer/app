'use server'
import { inngest } from '@/lib/inngest/client'
import { Json } from '@/lib/supabase/database.types'
import { createServerClient } from '@/lib/supabase/server'
import { type Workflow } from '@/lib/supabase/types'

export const sendBlogPostToReview = async (id: string) => {
  const supabase = await createServerClient()

  try {
    await supabase
      .from('blog_posts')
      .update({
        status: 'under review',
        markdown_ai_revision: null,
      })
      .eq('id', Number(id))
  } catch (error) {
    console.error('Error updating blog post status:', error)
  }

  await inngest.send({
    name: 'blog-post.updated',
    data: {
      id,
    },
  })
}

export const approveBlogPostAiSuggestions = async (id: string) => {
  await inngest.send({
    name: 'blog-post.approve-ai-suggestions',
    data: {
      id,
    },
  })
}

export const publishBlogPost = async (id: string) => {
  const supabase = await createServerClient()

  try {
    await supabase
      .from('blog_posts')
      .update({
        status: 'published',
        markdown_ai_revision: null,
      })
      .eq('id', Number(id))
  } catch (error) {
    console.error('Error updating blog post status:', error)
  }

  await inngest.send({
    name: 'blog-post.published',
    data: {
      id,
    },
  })
}
export const updateWorkflow = async (workflow: Workflow) => {
  const supabase = await createServerClient()
  await supabase
    .from('workflows')
    .update({
      workflow: workflow.workflow as unknown as Json,
    })
    .eq('id', workflow.id)
}

export const toggleWorkflow = async (workflowId: string, enabled: boolean) => {
  const supabase = await createServerClient()
  await supabase
    .from('workflows')
    .update({
      enabled,
    })
    .eq('id', workflowId)
    .select('*')
}
