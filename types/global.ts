import { ExternalProvider } from '@ethersproject/providers'
import { Wallet } from '@solana/wallet-adapter-react'

// type EthereumProvider = ExternalProvider & {
//   selectedAddress?: string
//   isMetaMask?: boolean
//   isCoinbaseWallet?: boolean
//   isRabby?: boolean
//   isTrust?: boolean
//   isFrame?: boolean
// }

export {}
export interface SolanaWallet {
  //   publicKey?: PublicKey | null
  publicKey?: {
    toString(): string
  }
  // [key: string]: any
  isPhantom?: boolean
  isSolflare?: boolean
  isBackpack?: boolean
  isGlow?: boolean
  connect(): Promise<void>
  disconnect(): Promise<void>
  signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>
}
declare global {
  interface Window {
    // solana wallets
    solana: { solana?: SolanaWallet }
    phantom: { solana?: SolanaWallet }
    solflare: SolanaWallet
    backpack: { solana?: SolanaWallet }
    // glowSolana: { solana?: SolanaWallet }

    // Ethereum wallets
    // ethereum?: EthereumProvider // MetaMask, Rabby, etc.
    // rabby?: EthereumProvider
    // coinbaseWalletExtension?: EthereumProvider
    // trustwallet?: EthereumProvider
    // frame?: EthereumProvider
  }
}
