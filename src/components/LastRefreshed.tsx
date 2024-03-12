import { useCookies } from "react-cookie";

function LastRefreshed() {
  const [cookies] = useCookies(["lastRefresh"]);
  const lastRefreshDate = cookies.lastRefresh;

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
