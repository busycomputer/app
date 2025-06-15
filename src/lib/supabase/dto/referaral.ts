'use server'

import { redirect } from 'next/navigation'
import { createServerClient } from '../server'

export async function checkReferrerId(referrer_code: string) {
  // /***
  //  * sanitize and validate
  //  */

  // supabase.from('referrals').count.where(referralCode)
  return true
}

const twitterRedirectLink =
  'https://twitter.com/intent/tweet?text=Anyone%20can%20now%20automate%20complex%20onchain%20tasks%20through%20%40BusyComputer.%0AGet%20on%20the%20waitlist%3A%20https%3A%2F%2Fwww.busycomputer.com%0A%0AMy%20early%20access%20code%20is%20'

const TWITTER_URL = 'https://twitter.com'

const TWITTER_ANY_ONE_CAN_SEE_PARAM =
  '?text=Anyone%20can%20now%20automate%20complex%20onchain%20tasks%20through%20%40BusyComputer.%0AGet%20on%20the%20waitlist%3A%20https%3A%2F%2Fwww.busycomputer.com%0A%0AMy%20early%20access%20code%20is%20'
type TWITTER_SLUGS = '/intent/tweet'

function getTwitterUrl(slug: TWITTER_SLUGS, referral_code: string, urlParams?: string) {
  return TWITTER_URL + (slug ? slug : '') + (urlParams ? urlParams : '') + referral_code
}
export async function createReferralDetails({
  is_wallet_verified,
  wallet_address,
  wallet_type,
  referrer_code,
}: {
  wallet_address: string
  wallet_type: string
  is_wallet_verified: boolean
  referrer_code?: string
}) {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from('referrals')
    .insert({
      wallet_address: wallet_address,
      wallet_type,
      referred_by: referrer_code,
      is_wallet_verified,
    })
    .select('referral_code')
    .single()

  // console.log('data', data)

  if (error) throw new Error('Failed to create referral', error)

  // const redirect_url = getTwitterUrl(
  //   '/intent/tweet',
  //   TWITTER_ANY_ONE_CAN_SEE_PARAM,
  //   data.referral_code
  // )
  // console.log(redirect_url)

  return redirect(
    `https://twitter.com/intent/tweet?text=Anyone%20can%20now%20automate%20complex%20onchain%20tasks%20through%20%40BusyComputer.%0AGet%20on%20the%20waitlist%3A%20https%3A%2F%2Fwww.busycomputer.com%0A%0AMy%20early%20access%20code%20is%20${data.referral_code}`
  )
}
