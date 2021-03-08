import React, { useEffect, useState } from "react";
import "./player-stats-page.styles.scss";
import PlayerStats from "../../components/player-stats/player-stats";
import useStatsApi from "../../hooks/useStatsApi";

function PlayerStatsPage() {
  const [{ data, isLoading, isError }, fetchStats] = useStatsApi(
    process.env.REACT_APP_API_URL + "players"
  );

  return (
    <div className="player-stats-page">
      {isError && <h1>ERROR FETCHING DATA</h1>}
      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        data.map((playerStat) => (
          <PlayerStats
            key={playerStat.id}
            title={playerStat.id}
            {...playerStat}
          />
        ))
      )}
    </div>
  );
}
export default PlayerStatsPage;
