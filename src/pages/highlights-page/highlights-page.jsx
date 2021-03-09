import React, { useEffect } from "react";
import Clips from "../../components/clips/clips";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";
import "./highlights-page.styles.scss";

function HighlightsPage() {
  const [{ data, isLoading, isError }, fetchStats] = useStatsApi();

  useEffect(() => {
    fetchStats(process.env.REACT_APP_API_URL + "highlights");
  }, [fetchStats]);

  return (
    <div className="highlights">
      {isLoading ? <Loader /> : isError ? <Error /> : <Clips clips={data} />}
    </div>
  );
}

export default HighlightsPage;
