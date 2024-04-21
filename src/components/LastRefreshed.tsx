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
    <div className="lastrefreshed__container">
      {lastRefreshDate ? (
        <p className="last__refreshed">Last refreshed on: {lastRefreshDate}</p>
      ) : (
        <p className="never__refreshed">Data has never been refreshed.</p>
      )}
    </div>
  );
}

export default LastRefreshed;
