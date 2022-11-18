import React from "react";
import Directory from "../../components/directory/directory";
import Scores from "../../components/scores/scores";
import TitleBar from "../../components/title-bar/title-bar";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";
import "./homepage.styles.css";

export type ScoresData = {
  winner: string;
  homeTeam: string;
  homeAbbrev: string;
  homePts: string;
  awayTeam: string;
  awayAbbrev: string;
  awayPts: string;
};

export type FullScores = {
  id: string;
  items: ScoresData[];
};

const initialState: FullScores = {
  id: "",
  items: [],
};

function HomePage() {
  const [{ data, isLoading, isError }] = useStatsApi<FullScores[]>(
    process.env.REACT_APP_API_URL + "scores",
    [initialState]
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const { items } = data[0];

  return (
    <div className="homepage">
      <div className="scores-container">
        <TitleBar title="LATEST SCORES" extraClass="scores" />
        <Scores items={items} />
      </div>
      <Directory />
    </div>
  );
}

export default HomePage;
