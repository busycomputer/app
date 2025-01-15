import { type EngineAction } from '@inngest/workflow-kit'
import { ClientOptions, EventsFromOpts } from 'inngest'

// Extracted Types
export type ActionHandler = EngineAction['handler']
export type Event = Omit<EventsFromOpts<ClientOptions>[number], 'data'> & {
  data: {
    workflow_id: string
  }
}
