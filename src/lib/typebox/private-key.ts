import { Type } from '@sinclair/typebox'

export const privateKey = Type.String({
  title: 'Wallet Private Key',
  description: 'Private key for blockchain wallet authentication',
  pattern: '^(0x)?[0-9a-fA-F]{64}$',
  minLength: 64,
  maxLength: 66,
  examples: ['0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'],
  errorMessage: {
    pattern: 'Must be a valid 32-byte hex string, optionally starting with 0x',
    minLength: 'Private key must be 32 bytes (64 hex characters)',
    maxLength: 'Private key must be 32 bytes (64 hex characters) with optional 0x prefix',
  },
})
