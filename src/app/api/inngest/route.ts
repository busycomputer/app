import { serve } from 'inngest/next'
import { inngest } from '@/lib/inngest/client'
import runOnDemand from '@/lib/inngest/functions/run-on-demand'

export const runtime = 'edge'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [runOnDemand],
})
