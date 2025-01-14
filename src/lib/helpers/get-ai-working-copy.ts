import type { WorkflowAction } from '@inngest/workflow-kit'
import type { BlogPost } from '@/lib/supabase/types'

// helper to ensure that each step of the workflow use
//  the original content or current AI revision
export const getAIWorkingCopy = (workflowAction: WorkflowAction, blogPost: BlogPost) => {
  return workflowAction.id === '1' // the first action of the workflow gets assigned id: "1"
    ? blogPost.markdown // if we are the first action, we use the initial content
    : blogPost.markdown_ai_revision || blogPost.markdown // otherwise we use the previous current ai revision
}
