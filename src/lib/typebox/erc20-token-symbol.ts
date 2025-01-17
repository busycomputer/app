import { Type } from '@sinclair/typebox'
import * as erc20Package from '@goat-sdk/plugin-erc20'
import { Token } from '@goat-sdk/plugin-erc20'

const tokenSymbols = Object.values(erc20Package)
  .filter(
    (exported): exported is Token =>
      typeof exported === 'object' &&
      exported !== null &&
      'symbol' in exported &&
      'decimals' in exported &&
      'name' in exported &&
      'chains' in exported &&
      typeof exported.symbol === 'string'
  )
  .map((token) => token.symbol)

const typeSchema = Type.Union(
  tokenSymbols.map((symbol) => Type.Literal(symbol)),
  {
    title: 'ERC20 Token Symbol',
    description: 'Token symbol matching @goat-sdk/plugin-erc20 tokens',
    examples: tokenSymbols.slice(0, 2),
    errorMessage: {
      type: `Token symbol must be one of: ${tokenSymbols.join(', ')}`,
    },
  }
)

export const erc20TokenSymbol = JSON.parse(JSON.stringify(typeSchema))
