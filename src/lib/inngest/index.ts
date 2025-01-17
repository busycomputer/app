import { type EngineAction } from '@inngest/workflow-kit'
import { Inngest } from 'inngest'
import { addToc } from '@/lib/inngest/actions/add-toc'
import { grammarReview } from '@/lib/inngest/actions/grammar-review'
import { applyChangesAfterApproval } from '@/lib/inngest/actions/apply-changes-after-approval'
import { applyChanges } from '@/lib/inngest/actions/apply-changes'
import { generateLinkedinPosts } from '@/lib/inngest/actions/generate-linkedin-posts'
import { generateTwitterPosts } from '@/lib/inngest/actions/generate-twitter-posts'
import { virtualsGameAgentGoat } from '@/lib/inngest/actions/virtuals-game-agent-goat'

// Exporting Inngest Client of the App
export const inngest = new Inngest({
  id: 'busycomputer',
})

// Exporting Actions available to use in Workflows
export const availableActions: EngineAction<typeof inngest>[] = [
  addToc,
  grammarReview,
  applyChangesAfterApproval,
  applyChanges,
  generateLinkedinPosts,
  generateTwitterPosts,
  virtualsGameAgentGoat,
]
