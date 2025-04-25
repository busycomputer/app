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

export interface DocumentEnhanceEvent extends Event {
  name: 'document.enhance'
  data: {
    documentId: string
    enhanceOptions: DocumentEnhanceOptions
  }
}

export interface DocumentEnhanceOptions {
  improveReadability: boolean
  enhanceSEO: boolean
  technicalReview: boolean
  structureAnalysis: boolean
}

export interface EnhancementSuggestion {
  type: 'readability' | 'seo' | 'technical' | 'structure'
  section: string
  original: string
  suggestion: string
  explanation: string
  confidence: number
}

export interface DocumentEnhanceResult {
  documentId: string
  suggestions: EnhancementSuggestion[]
  summary: string
  metrics: {
    readabilityScore?: number
    seoScore?: number
    technicalAccuracyScore?: number
    structureScore?: number
  }
}
