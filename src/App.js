import React from "react";
import Navbar from "./components/Navbar";
import Itinerary from "./components/Itinerary";

export default function App() {
  return (
    <main className="body-font">
      <Navbar />
      <Itinerary/>
    </main>
  );
}
