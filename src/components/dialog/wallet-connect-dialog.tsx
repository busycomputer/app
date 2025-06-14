'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Wallet, Wallet2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

// import {  } from '@/lib/wallets'
import { SOLANA_WALLETS, ETHEREUM_WALLETS, WalletAdapter, useWallet } from '@/hooks/use-wallet'
// import { useWalletContext } from '@/context/wallet-context'

export default function WalletConnectDialog() {
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
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Verify</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Connect Wallet</DialogTitle>
        </DialogHeader>

        {!connected ? (
          <div className="grid gap-3">
            {availableWallets.map((wallet) => (
              <Button
                key={wallet.name}
                variant="outline"
                className="flex items-center justify-start gap-3"
                onClick={() => handleConnect(wallet)}
              >
                <img src={wallet.icon} alt={wallet.name} className="h-6 w-6" />
                {wallet.name}
              </Button>
            ))}
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
