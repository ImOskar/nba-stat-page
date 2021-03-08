import React, { useEffect, useState } from "react";
import TeamStandings from "../../components/team-standing/team-standing";
import useStatsApi from "../../hooks/useStatsApi";

function StandingsPage() {
  const [{ data, isLoading, isError }, fetchStats] = useStatsApi(
    process.env.REACT_APP_API_URL + "standings"
  );

  return (
    <div className="team-standings">
      {isError && <h1>ERROR FETCHING DATA</h1>}
      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        data.map((teamStanding) => (
          <TeamStandings key={teamStanding.id} {...teamStanding} />
        ))
      )}
    </div>
  );
}

export default StandingsPage;
