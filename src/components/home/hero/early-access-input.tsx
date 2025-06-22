'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import TangledSideArrow from '@/components/svg/tangled-side-arrow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEarlyAccessInput } from '@/hooks/useEarlyAccessInput'
import { cn } from '@/lib/utils'
import {
  BASE58_REGEX,
  EarlyAccessValidator,
  EVM_ADDRESS_REGEX,
  TEarlyAccessValidator,
} from '@/lib/validators/early-access'
import { useWallet } from '@/hooks/use-wallet'
import WalletConnectDialog from '@/components/dialog/wallet-connect-dialog'
import { createReferralDetails } from '@/lib/supabase/dto/referaral'

export default function EarlyAccessInput() {
  const [verifiedWallet, setVerifiedWallet] = useState<boolean>(false)
  const { inputRef } = useEarlyAccessInput()
  const { mutate } = useMutation({
    mutationKey: ['get-early-access'],
    mutationFn: createReferralDetails,
    onMutate() {
      toast.loading('Creating referral, please wait...', { id: 'toastId' })
    },
    onSuccess() {
      toast.success('Creation successful', { id: 'toastId' })
      // router.push(redirect_link)
    },
    onError(error) {
      toast.error(`Failed to create referral, ${error.message}`, { id: 'toastId' })
    },
  })
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<TEarlyAccessValidator>({
    resolver: zodResolver(EarlyAccessValidator),
  })

  const getWalletType = (address: string): 'Solana' => {
    // if (address.length === 42 && EVM_ADDRESS_REGEX.test(address)) {
    //   return 'EVM'
    // }
    if (address.length >= 32 && address.length <= 44 && BASE58_REGEX.test(address)) {
      return 'Solana'
    }
    // This shouldn't happen due to validation, but TypeScript likes exhaustive checks
    throw new Error('Invalid wallet address format')
  }

  function handleVerifiedWalletAddress(value: string) {
    setVerifiedWallet(true)
    setValue('walletAddress', value)
  }
  async function onSubmit(values: TEarlyAccessValidator) {
    mutate({
      is_wallet_verified: verifiedWallet,
      wallet_address: values.walletAddress,
      wallet_type: getWalletType(values.walletAddress),
      referrer_code: values.referralCode,
    })
  }
  return (
    <div className="" ref={inputRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-space-mono relative mb-[70px] mt-32 flex w-full flex-col gap-3 sm:mx-auto sm:mt-3 sm:max-w-96 sm:flex-col sm:justify-center sm:gap-4 md:mt-5 md:max-w-2xl md:flex-col md:gap-3 lg:mt-11 lg:h-[44px] lg:max-w-fit lg:flex-row lg:gap-4">
          <div className="absolute -top-14 left-14 -translate-x-[calc(100%-13px)] -translate-y-1/2 sm:left-0 sm:top-1/2 sm:-translate-x-[calc(100%-4px)] md:-translate-x-[calc(100%+6px)]">
            <TangledSideArrow className="h-24 w-24 rotate-90 stroke-[#3B3B45] sm:h-20 sm:w-20 sm:rotate-0 md:h-24 md:w-24" />
          </div>
          <div className="space-y-2 sm:flex sm:gap-4 sm:space-y-0 md:flex md:gap-3 lg:contents">
            <div className="w-full lg:max-w-40">
              <Input
                placeholder="REFERRAL CODE"
                className={cn(
                  'mr-0 h-[50px] w-full rounded-sm border border-muted bg-muted py-0 text-center text-[16px] text-sm font-bold tracking-widest text-primary placeholder:bg-muted placeholder:text-left placeholder:font-thin sm:h-[50px] sm:max-w-none sm:flex-1 sm:px-6 sm:py-3 sm:text-left sm:placeholder:text-left sm:placeholder:text-xs md:h-[50px] md:max-w-none md:flex-1 md:px-4 lg:h-full lg:max-w-40 lg:py-4 lg:leading-[28px] lg:placeholder:tracking-widest xl:placeholder:text-[12px]',
                  { 'focus-visible:ring-1 focus-visible:ring-destructive': errors.referralCode }
                )}
                {...register('referralCode')}
              />
              {errors.referralCode ? (
                <div className="w-full pt-2 text-center text-xs font-thin text-destructive">
                  {errors.referralCode.message}
                </div>
              ) : null}
            </div>
            <div className="relative w-full lg:w-[360px]">
              <Input
                {...register('walletAddress')}
                placeholder="YOUR WALLET ADDRESS"
                className="relative mr-0 h-[50px] w-full rounded-sm border border-muted bg-muted py-0 text-center text-[16px] text-sm font-bold tracking-widest text-primary placeholder:bg-muted placeholder:text-left placeholder:font-thin sm:h-[50px] sm:max-w-none sm:flex-1 sm:px-6 sm:py-3 sm:text-left sm:placeholder:text-left sm:placeholder:text-xs md:h-[50px] md:max-w-none md:flex-1 md:px-4 lg:h-full lg:w-[360px] lg:py-4 lg:leading-[28px] lg:placeholder:tracking-widest xl:placeholder:text-[12px]"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 border text-muted-foreground">
                <WalletConnectDialog setVerifiedWalletAddress={handleVerifiedWalletAddress} />
              </div>
              {errors.walletAddress ? (
                <div className="w-full pt-2 text-center text-xs font-thin text-destructive">
                  {errors.walletAddress.message}
                </div>
              ) : null}
            </div>
          </div>
          <Button
            type="submit"
            className="h-[50px] w-full self-center truncate rounded-sm px-2 tracking-widest hover:bg-primary sm:-ml-1 sm:text-xs md:w-full lg:h-full lg:max-w-[180px] lg:text-[12px]"
          >
            GET EARLY ACCESS
          </Button>
        </div>
      </form>
    </div>
  )
}

// function WalletSelectionModal({
//   isOpen,
//   onClose,
//   availableWallets,
//   onSelectWallet,
//   connecting
// }: {
//   isOpen: boolean
//   onClose: () => void
//   availableWallets: any[]
//   onSelectWallet: (wallet: any) => void
//   connecting: boolean
// }) {
//   if (!isOpen) return null

//   return (
//     <Dialog open={isOpen}>
//       <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full mx-4">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold">Select Wallet</h3>
//           <button
//             onClick={onClose}
//             className="text-muted-foreground hover:text-foreground"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="space-y-2">
//           {availableWallets.map((wallet) => (
//             <div key={wallet.name}>
//               <button
//                 onClick={() => onSelectWallet(wallet)}
//                 disabled={connecting || wallet.readyState !== 'Installed'}
//                 className={cn(
//                   "w-full flex items-center gap-3 p-3 rounded-lg border transition-colors",
//                   wallet.readyState === 'Installed'
//                     ? "border-border hover:border-primary hover:bg-muted"
//                     : "border-muted bg-muted/50 cursor-not-allowed opacity-50"
//                 )}
//               >
//                 <img
//                   src={wallet.icon}
//                   alt={wallet.name}
//                   className="w-8 h-8 rounded-full"
//                   onError={(e) => {
//                     (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiMzMzMzMzMiLz4KPHRleHQgeD0iMTYiIHk9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxMiI+VzwvdGV4dD4KPHN2Zz4K'
//                   }}
//                 />
//                 <div className="flex-1 text-left">
//                   <div className="font-medium">{wallet.name}</div>
//                   <div className="text-xs text-muted-foreground">
//                     {wallet.readyState === 'Installed' ? 'Detected' : 'Not Installed'}
//                   </div>
//                 </div>
//                 {wallet.readyState === 'Installed' && (
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                 )}
//                 {wallet.readyState !== 'Installed' && (
//                   <ExternalLink className="w-4 h-4 text-muted-foreground" />
//                 )}
//               </button>

//               {wallet.readyState !== 'Installed' && (
//                 <div className="px-3 py-1">
//                   <a
//                     href={wallet.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-xs text-primary hover:underline"
//                   >
//                     Install {wallet.name} →
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {availableWallets.filter(w => w.readyState === 'Installed').length === 0 && (
//           <div className="text-center py-4 text-muted-foreground">
//             <p className="text-sm">No wallets detected.</p>
//             <p className="text-xs mt-1">Please install a Solana wallet to continue.</p>
//           </div>
//         )}
//       </div>
//     </Dialog>
//   )
// }

// export default function EarlyAccessInput() {
//   const { inputRef } = useEarlyAccessInput()
//   const [showWalletModal, setShowWalletModal] = useState(false)
//   const [isVerifying, setIsVerifying] = useState(false)

//   const {
//     availableWallets,
//     selectedWallet,
//     connected,
//     connecting,
//     publicKey,
//     connectWallet,
//     disconnectWallet,
//     verifyWallet
//   } = useSolanaWallet()

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     setValue,
//     watch
//   } = useForm<TEarlyAccessValidator>({
//     resolver: zodResolver(EarlyAccessValidator),
//   })

//   const walletAddress = watch('walletAddress')

//   // Handle wallet selection and verification
//   const handleWalletConnect = async (wallet: any) => {
//     const address = await connectWallet(wallet)
//     if (address) {
//       setShowWalletModal(false)

//       // Auto-verify wallet after connection
//       setIsVerifying(true)
//       try {
//         const verificationResult = await verifyWallet()
//         if (verificationResult) {
//           setValue('walletAddress', verificationResult.address)
//           toast.success('Wallet verified successfully!')
//         }
//       } catch (error) {
//         console.error('Verification error:', error)
//         toast.error('Failed to verify wallet')
//       } finally {
//         setIsVerifying(false)
//       }
//     }
//   }

//   // Handle manual wallet verification
//   const handleVerifyWallet = async () => {
//     if (!connected) {
//       setShowWalletModal(true)
//       return
//     }

//     setIsVerifying(true)
//     try {
//       const verificationResult = await verifyWallet()
//       if (verificationResult) {
//         setValue('walletAddress', verificationResult.address)
//         toast.success('Wallet verified successfully!')
//       }
//     } catch (error) {
//       console.error('Verification error:', error)
//       toast.error('Failed to verify wallet')
//     } finally {
//       setIsVerifying(false)
//     }
//   }

//   async function onSubmit(values: TEarlyAccessValidator) {
//     if (!connected || !publicKey) {
//       toast.error('Please connect and verify your wallet first')
//       return
//     }

//     try {
//       // Your existing form submission logic
//       console.log('Form submitted:', values)
//       toast.success('Early access request submitted!')
//     } catch (error) {
//       console.error('Submission error:', error)
//       toast.error('Failed to submit request')
//     }
//   }
