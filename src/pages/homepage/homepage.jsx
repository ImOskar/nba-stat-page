import React, { useEffect } from "react";
import Directory from "../../components/directory/directory";
import Scores from "../../components/scores/scores";
import TitleBar from "../../components/title-bar/title-bar";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";
import "./homepage.styles.scss";

function HomePage() {
  const [{ data, isLoading, isError }, fetchScores] = useStatsApi();

  useEffect(() => {
    fetchScores(process.env.REACT_APP_API_URL + "scores");
  }, [fetchScores]);

  return (
    <div className="homepage">
      <div className="scores-container">
        <TitleBar title="LATEST SCORES" extraClass="scores" />
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          <Scores scores={data[0].items} />
        )}
      </div>
      <Directory />
    </div>
  );
}

export default HomePage;
