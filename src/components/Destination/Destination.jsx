import React from "react";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/3.jpg";
import Mountain4 from "../../assets/4.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the apportunity to see a lot, within a time frame.</p>
      <DestinationData
      className={"first-dest"}
        heading="Taal Volcano, Batangas "
        text="lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
      className={"first-dest-reverse"}
        heading="Taal Volcano, Batangas "
        text="lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123 lorem123 lorem123 lorem123 lorem123
        lorem123 lorem123 lorem123"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}

export default Destination;
