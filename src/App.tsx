import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { CryptoResponse } from "./types/ApiResponseTypes";

function App() {
  const [crypto, setCrypto] = useState<CryptoResponse>();

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then(function (response: AxiosResponse<CryptoResponse, AxiosError>) {
        setCrypto(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.info("Done");
      });
  }, []);

  return (
    <h1>
      <ul>
        {crypto &&
          crypto.data.map((e) => {
            return (
              <li key={e.rank}>
                {e.id}: {e.priceUsd.toString().slice()}
              </li>
            );
          })}
      </ul>
    </h1>
  );
}

export default App;
