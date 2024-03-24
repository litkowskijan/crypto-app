import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import getCrypto from "./libs/coincapHelpers";
import { CryptoResponse } from "./types/ApiResponseTypes";
import TopCrypto from "./components/TopCrypto";
import Layout from "./pages/Layout";
import CurrencySearch from "./components/CurrencySearch";
import LastRefreshed from "./components/LastRefreshed";
import RefreshButton from "./components/RefreshButton";
import "./app.scss";

function App() {
  const [crypto, setCrypto] = useState<CryptoResponse>({
    data: [],
    timestamp: new Date(),
  });
  const [cookies, setCookies] = useCookies(["lastRefresh"]);

  const modifyCryptoState = async () => {
    const response = await getCrypto();
    try {
      setCrypto(response as CryptoResponse);
      localStorage.setItem("crypto", JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem("crypto");
    if (storage) {
      setCrypto(JSON.parse(storage) as CryptoResponse);
    } else {
      (async () => {
        await modifyCryptoState();
      })();
    }
    if (!cookies.lastRefresh) {
      setCookies("lastRefresh", crypto.timestamp || null);
    }
  }, [crypto]);

  return (
    <Layout>
      {/* Pass modifyCryptoState as prop */}
      <RefreshButton props={modifyCryptoState} />
      <LastRefreshed />
      <CurrencySearch props={crypto} />
      <TopCrypto props={crypto} />
    </Layout>
  );
}

export default App;
