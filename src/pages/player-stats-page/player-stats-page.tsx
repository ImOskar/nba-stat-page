import React from "react";
import PlayerStats from "../../components/player-stats/player-stats";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";

import "./player-stats-page.styles.css";

export type PlayerStatistics = {
  rank: string;
  name: string;
  team: string;
  stat: string;
};

export type FullPlayerStat = {
  id: string;
  items: PlayerStatistics[];
};

const initialState = {
  id: "",
  items: [],
};

function PlayerStatsPage() {
  const [{ data, isLoading, isError }] = useStatsApi<FullPlayerStat[]>(
    process.env.REACT_APP_API_URL + "players",
    [initialState]
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="player-stats-page">
      {data.map((playerStat) => (
        <PlayerStats
          key={playerStat.id}
          id={playerStat.id}
          items={playerStat.items}
        />
      ))}
    </div>
  );
}
export default PlayerStatsPage;
