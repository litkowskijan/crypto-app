import { format } from "date-fns";
import { useCookies } from "react-cookie";

function LastRefreshed() {
  const [cookies] = useCookies(["lastRefresh"]);
  let lastRefreshDate;
  if (cookies.lastRefresh) {
    lastRefreshDate = format(new Date(cookies.lastRefresh), "MM/dd/yyyy HH:mm");
  } else {
    lastRefreshDate = "Crypto was never refreshed before";
  }

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
