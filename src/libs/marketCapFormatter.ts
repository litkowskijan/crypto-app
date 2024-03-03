function marketCapFormatter(cryptoMarketCap: number): string {
  return `$${Math.round(cryptoMarketCap)}`;
}

export default marketCapFormatter;
