import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import spotify from './spotify.json'

// export const SOLANA_HOST = clusterApiUrl('devnet')
export const SOLANA_HOST = 'https://solitary-cool-night.solana-devnet.discover.quiknode.pro/57d4e2816a6292e8b8466b1d86f7df31a4d5c03f/'

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  '5wSMdEYxSW7iB3rdE7c8yB3bqBUrVtvggjDdY5viyDLk',
)

export const STABLE_POOL_IDL = spotify
