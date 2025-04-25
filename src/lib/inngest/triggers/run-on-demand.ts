'use server'

import { inngest } from '@/lib/inngest'
import { Event } from '@/lib/inngest/types'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'

export async function runOnDemand({
  workflow_id,
  user_id,
}: {
  workflow_id: string
  user_id: string
}) {
  // Input validation
  if (!workflow_id) {
    throw new Error('workflow_id is required')
  }
  
  if (!user_id) {
    throw new Error('user_id is required')
  }

  const onDemandEvent: Event = {
    name: EVENT_RUN_ON_DEMAND,
    data: {
      workflow_id,
    },
    user: {
      user_id,
    },
  }

  // Send the event to Inngest, letting any errors propagate
  await inngest.send(onDemandEvent)

  return { success: true }
}