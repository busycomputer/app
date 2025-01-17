'use client'

import { useEffect, useState } from 'react'
import { Workflow as UserWorkflow } from '@/lib/supabase/types'
import { createBrowserClient } from '@/lib/supabase/client'

export const useGetUserWorkflows = () => {
  const [userWorkflows, setUserWorkflows] = useState<UserWorkflow[]>([])

  useEffect(() => {
    const supabase = createBrowserClient()
    try {
      supabase
        .from('workflows')
        .select('*')
        .order('id')
        .then(({ data, error }) => {
          if (error) throw error
          if (data && data.length) setUserWorkflows(data)
        })
    } catch (e) {
      throw e
    }
  }, [])

  return userWorkflows
}
