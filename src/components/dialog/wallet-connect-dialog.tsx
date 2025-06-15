'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { WalletAdapter, useWallet } from '@/hooks/use-wallet'
import { cn } from '@/lib/utils'

export default function WalletConnectDialog({
  setVerifiedWalletAddress,
}: {
  setVerifiedWalletAddress: (state: string) => void
}) {
  const [open, setOpen] = useState(false)

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
    const result = await connectWallet(wallet)
    if (result) {
      toast.success(`Connected to ${wallet.name}`)
    }
  }

  const handleVerify = async () => {
    const result = await verifyWallet()
    if (result) {
      toast.success('Wallet verified!')
      console.log('Verified Payload:', result)
      setVerifiedWalletAddress(result.address)
      setOpen(false)
    }
  }

  const installedWallets = availableWallets.filter((fv) => fv.readyState === 'Installed')
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-background">
          Verify
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[1000] max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Connect Wallet</DialogTitle>
        </DialogHeader>

        {!connected ? (
          <div className="">
            <div className="flex flex-col gap-3">
              {availableWallets.map((wallet) => {
                return (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    className={cn('flex items-center justify-start gap-3', {
                      'cursor-not-allowed': !(wallet.readyState === 'Installed'),
                    })}
                    onClick={() => handleConnect(wallet)}
                    disabled={!(wallet.readyState === 'Installed')}
                  >
                    <wallet.icon className="h-6 w-6" />
                    {wallet.name}
                  </Button>
                )
              })}
            </div>
            {/* {!installedWallets.length && <div>Couldn't find any installed wallets</div>} */}
            {!installedWallets.length && (
              <div className="flex items-center justify-center py-8 text-gray-400">
                <AlertCircle className="mr-2 h-5 w-5" />
                <span className="text-sm">No supported wallets installed</span>
              </div>
            )}{' '}
          </div>
        ) : (
          <div className="space-y-4">
            <p>
              <span className="text-sm text-muted-foreground">Connected:</span>{' '}
              <span className="font-mono text-sm">{publicKey}</span>
            </p>
            <Button onClick={handleVerify} className="w-full">
              Verify Wallet Ownership
            </Button>
            <Button
              variant="ghost"
              className="w-full text-red-600"
              onClick={() => {
                disconnectWallet()
                setOpen(false)
              }}
            >
              Disconnect
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
