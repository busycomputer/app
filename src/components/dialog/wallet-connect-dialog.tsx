'use client'

import { useState } from 'react'
import { AlertCircle, Loader2, Wallet } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { TSolanaWallet, WalletAdapter, useWallet } from '@/hooks/use-wallet'
import { cn } from '@/lib/utils'

export default function WalletConnectDialog({
  setVerifiedWalletAddress,
}: {
  setVerifiedWalletAddress: (state: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [walletType, setWalletType] = useState<TSolanaWallet | (string & {})>('')

  const {
    connectWallet,
    disconnectWallet,
    verifyWallet,
    connected,
    selectedWallet,
    publicKey,
    availableWallets,
  } = useWallet()

  const handleConnect = async (wallet: WalletAdapter) => {
    if (wallet.readyState !== 'Installed') {
      toast.error(`${wallet.name} is not installed`)
      return
    }
    await connectWallet(wallet)
    // if (result) {
    //   toast.success(`Connected to ${wallet.name}`)
    // }
  }

  const handleVerify = async () => {
    const result = await verifyWallet({ walletType: walletType })
    if (result) {
      toast.success('Wallet verified!')
      // console.log('Verified Payload:', result)
      setVerifiedWalletAddress(result.address)
      setOpen(false)
    }
  }

  const installedWallets = availableWallets.filter((fv) => fv.readyState === 'Installed')
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-background">
          Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[1000] max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary flex items-center gap-3"><Wallet/>Connect Wallet</DialogTitle>
        </DialogHeader>

        {!connected ? (
          <div className="">
            <div className="flex flex-col gap-3">
              {availableWallets.map((wallet) => {
                return (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    className={cn('flex items-center justify-start py-8 gap-3', {
                      'cursor-not-allowed': !(wallet.readyState === 'Installed'),
                    })}
                    onClick={() => {
                      if(!(wallet.readyState === 'Installed')) return
                      setWalletType(wallet.name)
                      handleConnect(wallet)
                    }}
                    // disabled={!(wallet.readyState === 'Installed')}
                  >
                    <wallet.icon className="h-6 w-6" />
                    {wallet.name}
                  </Button>
                )
              })}
            </div>
            {/* {!installedWallets.length && <div>Couldn't find any installed wallets</div>} */}
            {!installedWallets.length && (
              <div className="mt-3 flex flex-col items-center justify-center rounded-md bg-card py-5 text-center">
                <AlertCircle className="mb-3 h-8 w-8 stroke-destructive text-gray-400" />
                <p className="mb-1 text-base font-medium text-gray-500">No wallets found</p>
                <p className="max-w-sm text-sm text-gray-400">
                  Install a supported Solana wallet to continue verification
                </p>
              </div>
            )}
          </div>
        ) : (
          // <div className="flex items-center gap-4"> Verifying...<Loader2 className='w-4 h-4 animate-spin'/></div>
          <div className="space-y-4">
            <p>
              <span className="text-sm text-muted-foreground">Connected:</span>{' '}
              <span className="font-mono text-sm">{publicKey}</span>
            </p>
            <Button onClick={handleVerify} className="w-full" variant={'secondary'}>
              Verify Wallet Ownership
            </Button>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => {
                disconnectWallet()
                setOpen(false)
              }}
              disabled={!connected}
            >
              Disconnect
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
