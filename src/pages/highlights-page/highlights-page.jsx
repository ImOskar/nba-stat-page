import React from "react";
import Clips from "../../components/clips/clips";
import useStatsApi from "../../hooks/useStatsApi";
import "./highlights-page.styles.scss";

function HighlightsPage() {
  const [{ data, isLoading, isError }, fetchStats] = useStatsApi(
    process.env.REACT_APP_API_URL + "highlights"
  );

  return (
    <div className="highlights">
      {isError && <h1>ERROR FETCHING DATA</h1>}
      {isLoading ? <h1>LOADING</h1> : <Clips clips={data} />}
    </div>
  );
}

export default HighlightsPage;
