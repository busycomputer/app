import { createClient } from 'src/lib/supabase/server'
import { BlogPost } from 'src/lib/supabase/types'

export async function loadBlogPost(id: string): Promise<BlogPost> {
  const supabase = await createClient()
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select(
      'id, title, subtitle, markdown_ai_revision, created_at, status, markdown, ai_publishing_recommendations'
    )
    .eq('id', id)
    .limit(1)

  const blogPost = blogPosts && blogPosts[0]

  if (!blogPost) {
    throw new Error(`Blog post #${id} not found`)
  }

  return blogPost
}
