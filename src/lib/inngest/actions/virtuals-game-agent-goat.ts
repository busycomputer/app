import OpenAI from 'openai'
import { EngineAction } from '@inngest/workflow-kit'
import { Type } from '@sinclair/typebox'
import {
  ExecutableGameFunctionResponse,
  ExecutableGameFunctionStatus,
  GameAgent,
  GameFunction,
  GameWorker,
} from '@virtuals-protocol/game'
import { http } from 'viem'
import { createWalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mode } from 'viem/chains'
import { ToolBase, getTools } from '@goat-sdk/core'
import { PEPE, USDC, erc20 } from '@goat-sdk/plugin-erc20'
import { sendETH } from '@goat-sdk/wallet-evm'
import { viem } from '@goat-sdk/wallet-viem'
import type { JSONSchemaType } from 'ajv'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { inngest } from '@/lib/inngest'
import { getAIWorkingCopy } from '@/lib/helpers/get-ai-working-copy'
import { createServerClient } from '@/lib/supabase/server'
import virtualsLogo from '@/assets/images/virtuals-logo.svg'
import { privateKey } from '@/lib/typebox/private-key'
import { rpcProviderUrl } from '@/lib/typebox/rpc-provider-url'
import { virtualsGameApiKey } from '@/lib/typebox/virtuals-game-api-key'
import { erc20TokenSymbol } from '@/lib/typebox/erc20-token-symbol'

export const virtualsGameAgentGoat: EngineAction<typeof inngest> = {
  // Add a Table of Contents
  kind: 'virtuals_game_agent_goat',
  name: 'Virtuals G.A.M.E',
  description: 'Perform on-chain actions with Virtuals Game Agent',
  icon: '🐐',
  inputs: {
    walletPrivateKey: {
      fieldType: 'text',
      type: privateKey,
    },
    rpcProviderUrl: {
      fieldType: 'text',
      type: rpcProviderUrl,
    },
    virtualsGameApiKey: {
      fieldType: 'text',
      type: virtualsGameApiKey,
    },
    tokenToSell: {
      fieldType: 'text',
      type: {
        ...erc20TokenSymbol,
        title: 'Token to Sell',
        description: 'Ticker of token to sell',
      },
    },
    tokenToBuy: {
      fieldType: 'text',
      type: {
        ...erc20TokenSymbol,
        title: 'Token to Buy',
        description: 'Ticker of token to buy',
      },
    },
  },
  handler: async ({ event, step, workflowAction }) => {
    // const supabase = await createServerClient()
    //
    // const blogPost = await step.run('load-blog-post', async () => loadBlogPost(event.data.id))
    //
    // const aiRevision = await step.run('add-toc-to-article', async () => {
    //   const openai = new OpenAI({
    //     apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    //   })
    //
    //   const prompt = `
    //     Please update the below markdown article by adding a Table of Content under the h1 title. Return only the complete updated article in markdown without the wrapping "\`\`\`".
    //
    //     Here is the text wrapped with "\`\`\`":
    //     \`\`\`
    //     ${getAIWorkingCopy(workflowAction, blogPost)}
    //     \`\`\`
    //     `
    //
    //   const response = await openai.chat.completions.create({
    //     model: process.env['OPENAI_MODEL'] || 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'system',
    //         content: 'You are an AI that make text editing changes.',
    //       },
    //       {
    //         role: 'user',
    //         content: prompt,
    //       },
    //     ],
    //   })
    //
    //   return response.choices[0]?.message?.content || ''
    // })
    //
    // await step.run('save-ai-revision', async () => {
    //   await supabase
    //     .from('blog_posts')
    //     .update({
    //       markdown_ai_revision: aiRevision,
    //       status: 'under review',
    //     })
    //     .eq('id', event.data.id)
    //     .select('*')
    // })
  },
}
