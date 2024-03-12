import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import getCrypto from "./libs/coincapHelpers";
import { CryptoResponse } from "./types/ApiResponseTypes";
import TopCrypto from "./components/TopCrypto";
import Layout from "./pages/Layout";
import CurrencySearch from "./components/CurrencySearch";
import LastRefreshed from "./components/LastRefreshed";

function App() {
  const [crypto, setCrypto] = useState<CryptoResponse>({
    data: [],
    timestamp: new Date(),
  });
  const [cookies, setCookies] = useCookies(["lastRefresh"]);

  useEffect(() => {
    const storage = localStorage.getItem("crypto");
    if (storage) {
      setCrypto(JSON.parse(storage) as CryptoResponse);
    } else {
      (async () => {
        try {
          const response = await getCrypto();
          setCrypto(response as CryptoResponse);
          localStorage.setItem("crypto", JSON.stringify(response));
        } catch (error) {
          console.error(error);
        }
      })();
    }
    const currentDate = new Date().toLocaleString();
    setCookies("lastRefresh", currentDate);
  }, []);

  return (
    <Layout>
      <LastRefreshed />
      <CurrencySearch props={crypto} />
      <TopCrypto props={crypto} />
    </Layout>
  );
}

export default App;
