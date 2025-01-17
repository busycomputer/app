import { inngest } from '@/lib/inngest'
import { Event } from '@/lib/inngest/types'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'

export const runOnDemand = async ({
  workflow_id,
  user_id,
}: {
  workflow_id: string
  user_id: string
}) => {
  const onDemandEvent: Event = {
    name: EVENT_RUN_ON_DEMAND,
    data: {
      workflow_id,
    },
    user: {
      user_id,
    },
  }

  await inngest.send(onDemandEvent)
}
