import bs58 from 'bs58'
import { ForwardRefExoticComponent, RefAttributes, useCallback, useEffect, useState } from 'react'
import { ExternalProvider } from '@ethersproject/providers'
import { Wallet, Shield, Coins, Zap, Gem, LucideProps } from 'lucide-react'
import toast from 'react-hot-toast'
import { SolanaWallet } from 'types/global'

type EthereumProvider = ExternalProvider & {
  selectedAddress?: string
  isMetaMask?: boolean
  isCoinbaseWallet?: boolean
  isRabby?: boolean
  isTrust?: boolean
  isFrame?: boolean
}

type EthereumProviderWithMultiSupport = EthereumProvider & {
  providers?: EthereumProvider[]
}

export interface WalletAdapter {
  name: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  url: string
  readyState: 'Installed' | 'NotDetected' | 'Loadable' | 'Unsupported'
}

type TSolanaWallet = (typeof SOLANA_WALLETS)[number]['name']
type TEthereumWallet = (typeof ETHEREUM_WALLETS)[number]['name']
type TWalletName = TSolanaWallet | TEthereumWallet | (string & {})

// Define available Solana wallets
export const SOLANA_WALLETS = [
  {
    name: 'Phantom',
    icon: Shield, // Purple ghost-like shield
    url: 'https://phantom.app/',
    readyState: 'NotDetected',
  },
  {
    name: 'Solflare',
    icon: Zap, // Fire/energy symbol
    url: 'https://solflare.com/',
    readyState: 'NotDetected',
  },
  {
    name: 'Backpack',
    icon: Wallet, // Classic wallet icon
    url: 'https://backpack.app/',
    readyState: 'NotDetected',
  },
  {
    name: 'Glow',
    icon: Gem, // Glowing gem
    url: 'https://glow.app/',
    readyState: 'NotDetected',
  },
] as const

export const ETHEREUM_WALLETS = [
  {
    name: 'MetaMask',
    icon: Shield, // Fox-like shield
    url: 'https://metamask.io/',
    readyState: 'NotDetected',
  },
  {
    name: 'Rabby',
    icon: Zap, // Rabbit energy
    url: 'https://rabby.io/',
    readyState: 'NotDetected',
  },
  {
    name: 'Coinbase Wallet',
    icon: Coins, // Coinbase = coins
    url: 'https://wallet.coinbase.com/',
    readyState: 'NotDetected',
  },
  {
    name: 'Trust Wallet',
    icon: Shield, // Trust = shield
    url: 'https://trustwallet.com/browser-extension',
    readyState: 'NotDetected',
  },
  {
    name: 'Frame',
    icon: Wallet, // Simple wallet
    url: 'https://frame.sh/',
    readyState: 'NotDetected',
  },
] as const

// interface SolanaWallet {
//   //   publicKey?: PublicKey | null
//   publicKey?: {
//     toString(): string
//   }
//   // [key: string]: any
//   isPhantom?: boolean
//   isSolflare?: boolean
//   isBackpack?: boolean
//   isGlow?: boolean
//   connect(): Promise<void>
//   disconnect(): Promise<void>
//   signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>
// }

// declare global {
//   interface Window {
//     // solana wallets
//    solana?: SolanaWallet
//     phantom?: { solana?: SolanaWallet }
//     solflare?: SolanaWallet
//     backpack?: { solana?: SolanaWallet; isBackpack?: boolean }
//     glowSolana?: SolanaWallet

//     // Ethereum wallets
//     ethereum?: EthereumProvider // MetaMask, Rabby, etc.
//     rabby?: EthereumProvider
//     coinbaseWalletExtension?: EthereumProvider
//     trustwallet?: EthereumProvider
//     frame?: EthereumProvider
//   }
// }

export const useWallet = () => {
  const [availableWallets, setAvailableWallets] = useState<WalletAdapter[]>([])
  const [selectedWallet, setSelectedWallet] = useState<WalletAdapter | null>(null)
  const [connected, setConnected] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [publicKey, setPublicKey] = useState<string>('')
  const [walletInstance, setWalletInstance] = useState<(SolanaWallet | EthereumProvider) | null>(
    null
  )

  const detectWallets = useCallback(() => {
    const detected: WalletAdapter[] = []

    // Detect Solana wallets
    SOLANA_WALLETS.forEach((wallet) => {
      let isInstalled = false

      switch (wallet.name) {
        case 'Phantom':
          isInstalled = !!window.phantom
          break
        case 'Solflare':
          isInstalled = !!window.solflare
          break
        case 'Backpack':
          isInstalled = !!window.backpack
          break
        case 'Glow':
          isInstalled = !!window.glowSolana
          break
      }

      detected.push({
        ...wallet,
        readyState: isInstalled ? 'Installed' : 'NotDetected',
      })
    })

    // Detect Ethereum wallets
    ETHEREUM_WALLETS.forEach((wallet) => {
      let isInstalled = false

      switch (wallet.name) {
        case 'MetaMask':
          isInstalled = !!(window as any).ethereum?.isMetaMask
          break
        case 'Rabby':
          isInstalled = !!(window as any).ethereum?.isRabby
          break
        case 'Coinbase Wallet':
          isInstalled = !!(window as any).ethereum?.isCoinbaseWallet
          break
        case 'Trust Wallet':
          isInstalled = !!(window as any).ethereum?.isTrust
          break
        case 'Frame':
          isInstalled = !!(window as any).ethereum?.isFrame
          break
      }

      detected.push({
        ...wallet,
        readyState: isInstalled ? 'Installed' : 'NotDetected',
      })
    })

    return detected
    // .filter((w) => w.readyState === 'Installed')
  }, [])

  const disconnectWallet = useCallback(async () => {
    if (walletInstance) {
      try {
        // 🔹 Solana wallets support disconnect
        if ('disconnect' in walletInstance && typeof walletInstance.disconnect === 'function') {
          await walletInstance.disconnect()
        }

        // 🔹 Ethereum wallets generally don't support disconnect
        // Some providers like WalletConnect may support session cleanup,
        // but most (e.g., MetaMask) stay connected unless the user manually disconnects.
      } catch (error) {
        console.error('Disconnect error:', error)
      }
    }

    // Reset local state regardless of wallet type
    setConnected(false)
    setPublicKey('')
    setSelectedWallet(null)
    setWalletInstance(null)
    toast.success('Wallet disconnected')
  }, [walletInstance])

  // Get wallet instance
  const getWalletInstance = useCallback(
    (walletName: TWalletName): SolanaWallet | EthereumProvider | null => {
      // ✅ Handle Solana wallets
      // const solana = window.solana
      const backpack = window?.backpack
      const phantom = window?.phantom
      const solflare = window?.solflare
      const glow = window?.glowSolana

      switch (walletName) {
        case 'Phantom':
          return phantom?.solana ?? null
        case 'Solflare':
          return solflare?.solana ?? null
        case 'Backpack':
          return backpack?.solana ?? null // ✅ Corrected here
        case 'Glow':
          return glow?.solana ?? null
      }

      // ✅ Handle Ethereum wallets (with multi-provider support)
      const eth = window.ethereum as EthereumProviderWithMultiSupport
      const allProviders = eth?.providers || [eth]

      switch (walletName) {
        case 'MetaMask':
          return allProviders.find((p) => p?.isMetaMask) || null
        case 'Rabby':
          return allProviders.find((p) => p?.isRabby) || null
        case 'Coinbase Wallet':
          return allProviders.find((p) => p?.isCoinbaseWallet) || null
        case 'Trust Wallet':
          return allProviders.find((p) => p?.isTrust) || null
        case 'Frame':
          return allProviders.find((p) => p?.isFrame) || null
        default:
          return null
      }
    },
    []
  )

  const connectWallet = useCallback(
    async (wallet: WalletAdapter) => {
      //   console.log('received:', wallet)

      if (wallet.readyState !== 'Installed') {
        toast.error(`${wallet.name} is not installed`)
        return false
      }
      //   console.log('reached')

      setConnecting(true)

      try {
        const instance = getWalletInstance(wallet.name)
        if (!instance) {
          throw new Error(`${wallet.name} wallet not found`)
        }

        let address: string | null = null

        // 🔹 Solana Wallets
        if ('connect' in instance && typeof instance.connect === 'function') {
          await instance.connect()
          //   console.log('res:', res)
          // console.log('getSolana:', instance)
          if (!instance.publicKey) {
            throw new Error('No public key found')
          }
          address = instance.publicKey.toString()
        }

        // 🔹 Ethereum Wallets
        if ('request' in instance && typeof instance.request === 'function') {
          const accounts = await instance.request({
            method: 'eth_requestAccounts',
          })
          if (!accounts || accounts.length === 0) {
            throw new Error('No Ethereum account found')
          }
          address = accounts[0]
        }

        if (!address) {
          throw new Error('Failed to retrieve wallet address')
        }

        setPublicKey(address)
        setSelectedWallet(wallet)
        setWalletInstance(instance)
        setConnected(true)

        toast.success(`Connected to ${wallet.name}`)
        return address
      } catch (error: any) {
        console.error('Wallet connection error:', error)
        toast.error(`Failed to connect to ${wallet.name}: ${error.message}`)
        return false
      } finally {
        setConnecting(false)
      }
    },
    [getWalletInstance]
  )

  const generateChallenge = useCallback(() => {
    const timestamp = Date.now()
    const nonce = Math.random().toString(36).substring(2, 15)
    return `Please sign this message to verify your wallet ownership.\n\nTimestamp: ${timestamp}\nNonce: ${nonce}`
  }, [])

  const signChallenge = useCallback(
    async (message: string): Promise<string | null> => {
      if (!walletInstance || !connected || !publicKey) {
        toast.error('No wallet connected')
        return null
      }

      try {
        // ✅ Solana
        if ('signMessage' in walletInstance && typeof walletInstance.signMessage === 'function') {
          const encodedMessage = new TextEncoder().encode(message)
          const signature = await walletInstance.signMessage(encodedMessage)
          const base58Signature = bs58.encode(signature.signature)
          toast.success('Message signed successfully (Solana)')
          return base58Signature
        }

        // ✅ Ethereum
        if ('request' in walletInstance && typeof walletInstance.request === 'function') {
          const signature = await walletInstance.request({
            method: 'personal_sign',
            params: [message, publicKey],
          })
          toast.success('Message signed successfully (Ethereum)')
          return signature
        }

        toast.error('This wallet does not support message signing')
        return null
      } catch (error: any) {
        console.error('Sign message error:', error)
        toast.error(`Failed to sign message: ${error.message}`)
        return null
      }
    },
    [walletInstance, connected, publicKey]
  )

  const verifyWallet = useCallback(async (): Promise<{
    address: string
    signature: string
  } | null> => {
    if (!connected || !publicKey) {
      toast.error('Please connect your wallet first')
      return null
    }

    const challenge = generateChallenge()
    const signature = await signChallenge(challenge)

    if (!signature) return null

    return {
      address: publicKey,
      signature,
    }
  }, [connected, publicKey, generateChallenge, signChallenge])

  //   run on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const res = detectWallets()
      setAvailableWallets(res)
    }, 100)
    return () => clearTimeout(timer)
  }, [detectWallets])

  // Listen for wallet events
  useEffect(() => {
    if (!walletInstance) return

    const handleAccountChanged = () => {
      if ('publicKey' in walletInstance && walletInstance.publicKey) {
        setPublicKey(walletInstance.publicKey.toString())
      } else if ('selectedAddress' in walletInstance && walletInstance.selectedAddress) {
        setPublicKey(walletInstance.selectedAddress)
      } else {
        disconnectWallet()
      }
    }

    if ('on' in walletInstance && typeof walletInstance.on === 'function') {
      walletInstance.on('accountChanged', handleAccountChanged)
    }

    return () => {
      if (
        'removeListener' in walletInstance &&
        typeof walletInstance.removeListener === 'function'
      ) {
        walletInstance.removeListener('accountChanged', handleAccountChanged)
      }
    }
  }, [walletInstance, disconnectWallet])

  return {
    availableWallets,
    selectedWallet,
    connected,
    connecting,
    publicKey,
    connectWallet,
    disconnectWallet,
    verifyWallet,
    signChallenge,
    detectWallets,
  }
}
