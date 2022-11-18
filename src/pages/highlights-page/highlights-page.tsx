import React from "react";
import Clips from "../../components/clips/clips";
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import useStatsApi from "../../hooks/useStatsApi";
import "./highlights-page.styles.css";

export type Highlights = {
  name: string;
  url: string;
};

const initialState = {
  name: "",
  url: "",
};

function HighlightsPage() {
  const [{ data, isLoading, isError }] = useStatsApi<Highlights[]>(
    process.env.REACT_APP_API_URL + "highlights",
    [initialState]
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="highlights">
      <Clips clips={data} />
    </div>
  );
}

export default HighlightsPage;
