import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./pages/homepage/homepage";
import PlayerStatsPage from "./pages/player-stats-page/player-stats-page";
import StandingsPage from "./pages/standings/standings";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HighlightsPage from "./pages/highlights-page/highlights-page";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/players" component={PlayerStatsPage} />
          <Route path="/highlights" component={HighlightsPage} />
          <Route path="/teams" component={StandingsPage} />
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
