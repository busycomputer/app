import { EngineAction } from '@inngest/workflow-kit'
import OpenAI from 'openai'
import { z } from 'zod'
import { inngest } from '@/lib/inngest'
import { createServerClient } from '@/lib/supabase/server'
import type {
  DocumentEnhanceOptions,
  DocumentEnhanceResult,
  EnhancementSuggestion,
} from '@/lib/inngest/types'

const enhanceSchema = z.object({
  documentId: z.string(),
  enhanceOptions: z.object({
    improveReadability: z.boolean().default(true),
    enhanceSEO: z.boolean().default(true),
    technicalReview: z.boolean().default(false),
    structureAnalysis: z.boolean().default(true),
  }),
})

export const documentEnhance: EngineAction<typeof inngest> = {
  kind: 'document_enhance',
  name: 'Document Enhancement Suite',
  description: 'AI-powered document analysis and enhancement',
  inputs: enhanceSchema,

  handler: async ({ event, step }) => {
    const supabase = await createServerClient()
    const openai = new OpenAI()
    const suggestions: EnhancementSuggestion[] = []

    // Load document
    const document = await step.run('load-document', async () => {
      const { data, error } = await supabase
        .from('blog_posts') // Using existing blog_posts table
        .select('*')
        .eq('id', event.data.documentId)
        .single()

      if (error) throw new Error(`Failed to load document: ${error.message}`)
      return data
    })

    // Structure Analysis
    if (event.data.enhanceOptions.structureAnalysis) {
      const structureSuggestions = await step.run('analyze-structure', async () => {
        const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content:
                'You are an expert document structure analyzer. Analyze the document structure and suggest improvements for organization, headings, and section flow. Return a JSON object with a suggestions array containing objects with section, original, suggestion, explanation, and confidence (0-1) fields.',
            },
            {
              role: 'user',
              content: `Analyze this document's structure and suggest improvements:\n\n${document.markdown}`,
            },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.7,
        })

        const analysis = JSON.parse(response.choices[0]?.message?.content || '{"suggestions": []}')
        return analysis.suggestions.map((s: any) => ({
          type: 'structure',
          section: s.section,
          original: s.original,
          suggestion: s.suggestion,
          explanation: s.explanation,
          confidence: s.confidence,
        }))
      })
      suggestions.push(...structureSuggestions)
    }

    // Readability Enhancement
    if (event.data.enhanceOptions.improveReadability) {
      const readabilitySuggestions = await step.run('enhance-readability', async () => {
        const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content:
                'You are an expert in improving document readability. Suggest improvements for clarity, flow, and engagement. Return a JSON object with a suggestions array containing objects with section, original, suggestion, explanation, and confidence (0-1) fields.',
            },
            {
              role: 'user',
              content: `Analyze this document's readability and suggest improvements:\n\n${document.markdown}`,
            },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.7,
        })

        const analysis = JSON.parse(response.choices[0]?.message?.content || '{"suggestions": []}')
        return analysis.suggestions.map((s: any) => ({
          type: 'readability',
          section: s.section,
          original: s.original,
          suggestion: s.suggestion,
          explanation: s.explanation,
          confidence: s.confidence,
        }))
      })
      suggestions.push(...readabilitySuggestions)
    }

    // SEO Optimization
    if (event.data.enhanceOptions.enhanceSEO) {
      const seoSuggestions = await step.run('optimize-seo', async () => {
        const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content:
                'You are an SEO expert. Analyze the content and suggest improvements for search engine optimization. Return a JSON object with a suggestions array containing objects with section, original, suggestion, explanation, and confidence (0-1) fields.',
            },
            {
              role: 'user',
              content: `Analyze this document for SEO improvements:\n\n${document.markdown}`,
            },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.7,
        })

        const analysis = JSON.parse(response.choices[0]?.message?.content || '{"suggestions": []}')
        return analysis.suggestions.map((s: any) => ({
          type: 'seo',
          section: s.section,
          original: s.original,
          suggestion: s.suggestion,
          explanation: s.explanation,
          confidence: s.confidence,
        }))
      })
      suggestions.push(...seoSuggestions)
    }

    // Technical Review
    if (event.data.enhanceOptions.technicalReview) {
      const technicalSuggestions = await step.run('technical-review', async () => {
        const response = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content:
                'You are a technical documentation expert. Review the content for technical accuracy and clarity. Return a JSON object with a suggestions array containing objects with section, original, suggestion, explanation, and confidence (0-1) fields.',
            },
            {
              role: 'user',
              content: `Review this document for technical accuracy:\n\n${document.markdown}`,
            },
          ],
          response_format: { type: 'json_object' },
          temperature: 0.7,
        })

        const analysis = JSON.parse(response.choices[0]?.message?.content || '{"suggestions": []}')
        return analysis.suggestions.map((s: any) => ({
          type: 'technical',
          section: s.section,
          original: s.original,
          suggestion: s.suggestion,
          explanation: s.explanation,
          confidence: s.confidence,
        }))
      })
      suggestions.push(...technicalSuggestions)
    }

    // Calculate metrics
    const metrics = {
      readabilityScore: event.data.enhanceOptions.improveReadability
        ? calculateScore(suggestions.filter((s) => s.type === 'readability'))
        : undefined,
      seoScore: event.data.enhanceOptions.enhanceSEO
        ? calculateScore(suggestions.filter((s) => s.type === 'seo'))
        : undefined,
      technicalAccuracyScore: event.data.enhanceOptions.technicalReview
        ? calculateScore(suggestions.filter((s) => s.type === 'technical'))
        : undefined,
      structureScore: event.data.enhanceOptions.structureAnalysis
        ? calculateScore(suggestions.filter((s) => s.type === 'structure'))
        : undefined,
    }

    // Generate summary
    const summary = await step.run('generate-summary', async () => {
      const response = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: 'Generate a concise summary of document enhancement suggestions.',
          },
          {
            role: 'user',
            content: `Summarize these enhancement suggestions:\n\n${JSON.stringify(suggestions)}`,
          },
        ],
        temperature: 0.7,
      })

      return response.choices[0]?.message?.content || ''
    })

    // Save results
    const result: DocumentEnhanceResult = {
      documentId: event.data.documentId,
      suggestions,
      summary,
      metrics,
    }

    await step.run('save-enhancements', async () => {
      const { error } = await supabase.from('blog_post_enhancements').insert({
        blog_post_id: event.data.documentId,
        suggestions,
        summary,
        metrics,
        status: 'pending_review',
      })

      if (error) throw new Error(`Failed to save enhancements: ${error.message}`)
    })

    return result
  },
}

function calculateScore(suggestions: EnhancementSuggestion[]): number {
  if (suggestions.length === 0) return 100
  const totalConfidence = suggestions.reduce((sum, s) => sum + s.confidence, 0)
  const averageConfidence = totalConfidence / suggestions.length
  // Higher confidence in issues means lower score
  return Math.max(0, Math.min(100, 100 - averageConfidence * 20))
}
