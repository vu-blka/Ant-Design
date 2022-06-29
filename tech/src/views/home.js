import React from "react";

import AppHero from "../components/home/hero.js";
import AppAbout from "../components/home/about.js";
import AppCard from "../components/home/fearture.js";
import AppWork from "../components/home/works.js";
import AppFAQ from "../components/home/faq.js";
import AppPricing from "../components/home/pricing.js";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppCard />
      <AppWork />
      <AppFAQ />
      <AppPricing />
    </div>
  );
}

export default AppHome;
