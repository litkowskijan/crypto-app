import { useEffect, useState } from "react";
import getCrypto from "./libs/coincapHelpers";
import { CryptoResponse } from "./types/ApiResponseTypes";
import TopCrypto from "./components/TopCrypto";
import Layout from "./pages/Layout";

function App() {
  const [crypto, setCrypto] = useState<CryptoResponse>({
    data: [],
    timestamp: new Date(),
  });

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
  }, []);

  return (
    <Layout>
      <TopCrypto props={crypto} />;
    </Layout>
  );
}

export default App;
