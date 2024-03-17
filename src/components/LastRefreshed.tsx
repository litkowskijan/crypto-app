import { format } from "date-fns";
import { useCookies } from "react-cookie";

function LastRefreshed() {
  const [cookies] = useCookies(["lastRefresh"]);
  const lastRefreshDate =
    format(new Date(cookies.lastRefresh), "MM/dd/yyyy HH:mm") ||
    "Crypto was never refreshed before";

  return (
    <div>
      {lastRefreshDate ? (
        <p>Last refreshed on: {lastRefreshDate}</p>
      ) : (
        <p>Data has never been refreshed.</p>
      )}
    </div>
  );
}

export default LastRefreshed;
