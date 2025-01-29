import { serve } from 'inngest/next'
import { inngest } from '@/lib/inngest'
import runOnDemand from '@/lib/inngest/functions/run-on-demand'
import runOnWebhook from '@/lib/inngest/functions/run-on-webhook'

export const runtime = 'edge'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [runOnDemand, runOnWebhook],
})
