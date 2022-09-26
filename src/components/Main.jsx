import React from "react";
import Section from "./Section";
import ImageA from "../assets/img/section-a.webp";
import ImageB from "../assets/img/section-b.webp";
import ImageC from "../assets/img/section-c.webp";
import ImageD from "../assets/img/section-d.webp";
import ImageE from "../assets/img/section-e.webp";
import ImageF from "../assets/img/section-f.webp";

function Main() {
  return (
    <div>
      <Section
        subtitle="Upcoming Launch"
        title="CRS-25 Mission"
        image={ImageA}
      />
      <Section
        subtitle="Recent Launch"
        title="Starlink Mission"
        image={ImageB}
      />
      <Section
        subtitle="Recent Mission"
        title="SES-22 Mission"
        image={ImageC}
      />
      <Section
        subtitle="Recent Launch"
        title="Globalstar FM15 Mission"
        image={ImageD}
      />
      <Section title="Starship Update" image={ImageE} />
      <Section
        title="Starship to add NASA astronauts on the moon"
        image={ImageF}
      />
    </div>
  );
}

export default Main;
