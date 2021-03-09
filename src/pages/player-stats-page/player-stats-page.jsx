import React, { useEffect } from "react";
import "./player-stats-page.styles.scss";
import PlayerStats from "../../components/player-stats/player-stats";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";

function PlayerStatsPage() {
  const [{ data, isLoading, isError }, fetchStats] = useStatsApi();

  useEffect(() => {
    fetchStats(process.env.REACT_APP_API_URL + "players");
  }, [fetchStats]);

  return (
    <div className="player-stats-page">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
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
