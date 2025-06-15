'use server'

import { PublicKey } from '@solana/web3.js'
import { createServerClient } from '@/lib/supabase/server'
import { EarlyAccessValidator, TEarlyAccessValidator } from '@/lib/validators/early-access'

export async function createEarlyAccess({
  referralCode,
  walletAddress,
}: {
  referralCode: string
  walletAddress: string
}) {
  /**
   * validate the inputs
   * check referrer id exists
   *
   * store wallet id, referral_id and referred_it into database for future purpose
   *
   */
  const data: TEarlyAccessValidator = {
    referralCode,
    walletAddress,
  }

  //   const referralCodeExists = checkReferrerId(referralCode)

  //   if (!referralCodeExists) throw new Error('Failed to verify referralId')

  // Create random string return 6 digits code

  //   createReferralDetails(referrer_code
  //     wallet_id
  //     referral_code)
}
