import React, { useEffect, useState } from "react";
import Directory from "../../components/directory/directory";
import Scores from "../../components/scores/scores";
import useStatsApi from "../../hooks/useStatsApi";
import "./homepage.styles.scss";

function HomePage() {
  const [{ data, isLoading, isError }, fetchScores] = useStatsApi(
    process.env.REACT_APP_API_URL + "scores"
  );

  console.log(isLoading);
  return (
    <div className="homepage">
      {isError && <h1>ERROR LOADING SCORES</h1>}
      {isLoading ? <h1>LOADING</h1> : <Scores scores={data[0].items} />}
      <Directory />
    </div>
  );
}

export default HomePage;
