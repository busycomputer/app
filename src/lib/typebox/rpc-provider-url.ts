import { Type } from '@sinclair/typebox'

const typeSchema = Type.String({
  title: 'RPC Provider URL',
  description: 'URL endpoint for blockchain RPC provider',
  pattern:
    '^(https?:\\/\\/)(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])(\\/.*)?$',
  format: 'uri',
  examples: ['https://eth-mainnet.g.alchemy.com/v2/your-api-key', 'http://localhost:8545'],
  errorMessage: {
    pattern: 'Must be a valid HTTP/HTTPS URL',
    format: 'Invalid URL format',
  },
})

export const rpcProviderUrl = JSON.parse(JSON.stringify(typeSchema))
