import React from "react";

import AppHero from "../components/home/hero.js";
import AppAbout from "../components/home/about.js";
import AppCard from "../components/home/fearture.js";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppCard />
    </div>
  );
}

export default AppHome;
