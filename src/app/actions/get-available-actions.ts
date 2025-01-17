'use server'

import { type PublicEngineAction } from '@inngest/workflow-kit'
import { availableActions } from '@/lib/inngest'

export const getAvailableActions = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return availableActions.map(({ handler, ...rest }) => rest as PublicEngineAction)
}
