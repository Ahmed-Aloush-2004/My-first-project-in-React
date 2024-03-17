import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading={"Trip in Indonesia"}
          text={
            "lllll llllllllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss ssss akjf ed e d ff  fffffff ss ssss akjf ed e d ff  fffffff ss ssss lllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss ssss"
          }
        />{" "}
        <TripData
          image={Trip2}
          heading={"Trip in Malaysia"}
          text={
            "lllll llllllllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss ssss akjf ed e d ff  fffffff ss ssss akjf ed e d ff  fffffff ss ssss lllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss ssss"
          }
        />{" "}
        <TripData
          image={Trip3}
          heading={"Trip in France"}
          text={
            "lllll llllllllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss ssss akjf ed e d ff  fffffff ss ssss akjf ed e d ff  fffffff ss ssss lllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss sssslllll akjf ed e d ff  fffffff ss ssss"
          }
        />
      </div>
    </div>
  );
}

export default Trip;
