/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import marketCapFormatter from "../libs/valueFormatters";
import { CryptoResponse } from "../types/ApiResponseTypes";

interface TopCryptoProps {
  props: CryptoResponse;
}

function TopCrypto({ props }: TopCryptoProps) {
  const [list, setList] = useState<CryptoResponse>();
  useEffect(() => {
    setList(props);
  }, [props]);
  return (
    <div>
      <h2>Favourite crypto:</h2>
      {list?.data &&
        list.data.slice(0, 10).map((e) => {
          return (
            <div
              key={e.rank}
              style={{
                width: "200px",
                display: "inline-block",
                border: "1px solid",
              }}
            >
              <div>
                {e.rank}. {e.id}:
                <p>
                  <small>24h difference in %:</small>
                </p>
                <span
                  style={{
                    color: e.changePercent24Hr >= 0 ? "green" : "red",
                  }}
                >
                  {Number(e.changePercent24Hr).toFixed(4)}%
                </span>
              </div>
              <p>Market cap: {marketCapFormatter(e.marketCapUsd)}</p>
            </div>
          );
        })}
    </div>
  );
}

export default TopCrypto;
