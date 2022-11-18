import React from "react";
import TeamStandings from "../../components/team-standing/team-standing";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";
import "./standings.styles.css";

export type Standings = {
  abbr: string;
  name: string;
  seed: string;
  wins: string;
  losses: string;
  winLossPct: string;
  gb: string;
  ppg: string;
  oPpg: string;
  srs: string;
};

export type FullStandings = {
  id: string;
  items: Standings[];
};

const initialState = {
  id: "",
  items: [],
};

function StandingsPage() {
  const [{ data, isLoading, isError }] = useStatsApi<FullStandings[]>(
    process.env.REACT_APP_API_URL + "standings",
    [initialState]
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="team-standings">
      {data.map((teamStanding) => (
        <TeamStandings key={teamStanding.id} {...teamStanding} />
      ))}
    </div>
  );
}

export default StandingsPage;
