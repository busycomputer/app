import { type EngineAction } from '@inngest/workflow-kit'
import { inngest } from '@/lib/inngest/client'
import { addToc } from '@/lib/inngest/actions/addToc'
import { grammarReview } from '@/lib/inngest/actions/grammarReview'
import { applyChangesAfterApproval } from '@/lib/inngest/actions/applyChangesAfterApproval'
import { applyChanges } from '@/lib/inngest/actions/applyChanges'
import { generateLinkedInPosts } from '@/lib/inngest/actions/generateLinkedInPosts'
import { generateTwitterPosts } from '@/lib/inngest/actions/generateTwitterPosts'

export const actionsWithHandlers: EngineAction<typeof inngest>[] = [
  addToc,
  grammarReview,
  applyChangesAfterApproval,
  applyChanges,
  generateLinkedInPosts,
  generateTwitterPosts,
]
