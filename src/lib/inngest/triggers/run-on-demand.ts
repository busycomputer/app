'use server'

import { inngest } from '@/lib/inngest'
import { Event } from '@/lib/inngest/types'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'
import { createServerClient } from '@/lib/supabase/server'

export async function runOnDemand({
  workflow_id,
}: {
  workflow_id: string
}) {
  // Input validation
  if (!workflow_id) {
    throw new Error('workflow_id is required')
  }
  
  const supabase = await createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated')
  }
  const user_id = user.id

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
  const { ids } = await inngest.send(onDemandEvent)
  const eventId = ids && ids.length > 0 ? ids[0] : undefined;

  // Log the event ID or handle potential undefined case if needed
  console.log(`Sent Inngest event with ID: ${eventId}`);

  return { success: true, eventId: eventId }
}