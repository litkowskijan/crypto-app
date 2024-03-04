/* eslint-disable react/prop-types */
import marketCapFormatter from "../libs/marketCapFormatter";
import { CryptoResponse } from "../types/ApiResponseTypes";

interface TopCryptoProps {
  props: CryptoResponse;
}

function TopCrypto({ props }: TopCryptoProps) {
  return (
    <div>
      {props.data &&
        props.data.slice(0, 10).map((e) => {
          return (
            <div
              key={e.rank}
              style={{
                width: "200px",
                display: "inline-block",
              }}
            >
              <div>
                {e.rank}. {e.id}: {e.priceUsd.toString().slice()}
              </div>
              <p>Market cap: {marketCapFormatter(e.marketCapUsd)}</p>
            </div>
          );
        })}
    </div>
  );
}

export default TopCrypto;
