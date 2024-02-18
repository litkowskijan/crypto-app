import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface CurrencyInfo {
  rank: number,
  id: string,
  supply: number,
  maxSupply: number,
  marketCapUsd: number,
  volumeUsd24H: number,
  priceUsd: number,
  changePercent24H: number,
  vwap24hr: number
}

type CryptoResponse = {
  data: CurrencyInfo[],
  timestamp: Date
}

function App() {
const [crypto, setCrypto] = useState<CryptoResponse>();

useEffect(() => {
    axios.get('https://api.coincap.io/v2/assets')
    .then(function (response: AxiosResponse<CryptoResponse, AxiosError>) {
      setCrypto(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.info('Done');
    });

}, [])

  return (
    <>
    <h1>
      {crypto && crypto.data.map((e) => {
        return <ul>
          <li key={e.rank}>{e.id}: {e.priceUsd.toString().slice()}</li>
        </ul>
      })  
      }
      
    </h1>
    </>
  )
}

export default App


// 


// https://api.coincap.io/v2/assets