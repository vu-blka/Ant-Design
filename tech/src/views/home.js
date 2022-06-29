import React from "react";

import AppHero from "../components/home/hero.js";
import AppAbout from "../components/home/about.js";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
    </div>
  );
}

export default AppHome;
