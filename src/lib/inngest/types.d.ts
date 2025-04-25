import { ClientOptions, EventsFromOpts } from 'inngest'

// Extracted Types
export type Event = Omit<EventsFromOpts<ClientOptions>[number], 'data'> & {
  data: {
    workflow_id: string
    payload?: any
    headers?: Record<string, string>
    queryParams?: Record<string, string[]>
  }
}
