import { type EngineAction } from '@inngest/workflow-kit'
import { inngest } from '@/lib/inngest/client'
import { addToc } from '@/lib/inngest/actions/add-toc'
import { grammarReview } from '@/lib/inngest/actions/grammar-review'
import { applyChangesAfterApproval } from '@/lib/inngest/actions/apply-changes-after-approval'
import { applyChanges } from '@/lib/inngest/actions/apply-changes'
import { generateLinkedinPosts } from '@/lib/inngest/actions/generate-linkedin-posts'
import { generateTwitterPosts } from '@/lib/inngest/actions/generate-twitter-posts'

export const engineActions: EngineAction<typeof inngest>[] = [
  addToc,
  grammarReview,
  applyChangesAfterApproval,
  applyChanges,
  generateLinkedinPosts,
  generateTwitterPosts,
]
