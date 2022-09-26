import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../components/Main";

import Falcon9 from "../assets/img/falcon-9.webp";
import FalconHeavy from "../assets/img/falcon-heavy.webp";
import Dragon from "../assets/img/dragon.webp";
import Page from "../components/Page";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Main />} />
      <Route
        path="/falcon9"
        element={
          <Page
            mainTitle="Falcon 9"
            text="First orbital class rocket capable of reflight"
            titles={["Total Launches", "Total Landings", "Total Reflights"]}
            numbers={[3, 7, 4]}
            image={Falcon9}
          />
        }
      />
      <Route
        path="/falcon-heavy"
        element={
          <Page
            mainTitle="Falcon Heavy"
            text="The world's most powerful rocket"
            titles={["Total Launches", "Total Landings", "Total Reflights"]}
            numbers={[5, 8, 5]}
            image={FalconHeavy}
          />
        }
      />
      <Route
        path="/dragon"
        element={
          <Page
            mainTitle="Dragon"
            text="Sending humans and cargo into space"
            titles={["Total Launches", "Visits to the ISS", "Reflow Missions"]}
            numbers={[33, 31, 13]}
            image={Dragon}
          />
        }
      />
    </Routes>
  );
}

export default AnimatedRoutes;
