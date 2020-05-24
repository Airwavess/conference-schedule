import React from "react";
import "./styles.css";
import RoomHeader from "./RoomHeader";
import Schedule from "./Schedule";
import data from "./data.json";

const rooms = data["rooms"];

export default function App() {
  return (
    <div className="App">
      <RoomHeader rooms={rooms} />
      <Schedule data={data} />
    </div>
  );
}
