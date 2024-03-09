export interface CurrencyInfo {
  rank: number;
  id: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24H: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24hr: number;
}

export type CryptoResponse = {
  data: CurrencyInfo[] | [];
  timestamp: Date;
};
