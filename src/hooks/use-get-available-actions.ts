'use client'

import { useEffect, useState } from 'react'
import { PublicEngineAction } from '@inngest/workflow-kit'
import { getAvailableActions } from '@/app/actions/get-available-actions'

export const useGetAvailableActions = () => {
  const [availableActions, setAvailableActions] = useState<PublicEngineAction[]>([])

  useEffect(() => {
    getAvailableActions().then((result) => {
      setAvailableActions(result)
    })
  }, [])

  return availableActions
}
