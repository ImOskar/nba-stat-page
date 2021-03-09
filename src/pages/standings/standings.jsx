import React, { useEffect } from "react";
import TeamStandings from "../../components/team-standing/team-standing";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";
import "./standings.styles.scss";

function StandingsPage() {
  const [{ data, isLoading, isError }, fetchStats] = useStatsApi();

  useEffect(() => {
    fetchStats(process.env.REACT_APP_API_URL + "standings");
  }, [fetchStats]);

  return (
    <div className="team-standings">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        data.map((teamStanding) => (
          <TeamStandings key={teamStanding.id} {...teamStanding} />
        ))
      )}
    </div>
  );
}

export default StandingsPage;
