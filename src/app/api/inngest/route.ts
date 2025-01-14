import { serve } from 'inngest/next'
import { inngest } from '@/lib/inngest/client'
import workflow from '@/lib/inngest/workflow'

export const runtime = 'edge'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [workflow],
})
