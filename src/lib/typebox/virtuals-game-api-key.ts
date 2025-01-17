import { Type } from '@sinclair/typebox'

export const virtualsGameApiKey = Type.String({
  title: 'Virtuals G.A.M.E API Key',
  description: 'Authentication key for Virtuals G.A.M.E API access',
  pattern: '^[A-Za-z0-9_-]{32,128}$',
  minLength: 32,
  maxLength: 128,
  examples: ['abcd1234efgh5678ijkl9012mnop3456qrst7890'],
  errorMessage: {
    pattern: 'API key must contain only letters, numbers, underscores, and hyphens',
    minLength: 'API key must be at least 32 characters',
    maxLength: 'API key cannot exceed 128 characters',
  },
})
