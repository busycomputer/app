import { NextResponse } from 'next/server'
import { PublicEngineAction } from '@inngest/workflow-kit'

export async function GET() {
  const { engineActions } = await import('@/lib/inngest/engine-actions')
  const publicEngineActions = engineActions.reduce((acc: PublicEngineAction[], engineAction) => {
    const { kind, name, description } = engineAction
    acc.push({
      kind,
      name,
      description,
    })

    return acc
  }, [])

  return NextResponse.json({ publicEngineActions })
}
