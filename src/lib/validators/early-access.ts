import { z } from 'zod'

export const BASE58_REGEX = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/
export const EVM_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/

export type TEarlyAccessValidator = z.infer<typeof EarlyAccessValidator>

export const EarlyAccessValidator = z.object({
  referralCode: z.string().length(6, 'Referral code must be exactly 6 characters').trim(),
  walletAddress: z
    .string()
    .min(1, { message: 'Wallet address is required' })
    .refine(
      (address) => {
        // Check if it's a valid EVM address (42 characters, starts with 0x)
        // if (address.length === 42 && EVM_ADDRESS_REGEX.test(address)) {
        //   return true
        // }

        // Check if it's a valid Solana address (32-44 characters, Base58 encoded)
        if (address.length >= 32 && address.length <= 44 && BASE58_REGEX.test(address)) {
          return true
        }

        return false
      },
      {
        message: 'Invalid wallet address. Must be a valid Solana address (32-44 Base58 characters)',
      }
    ),
})
