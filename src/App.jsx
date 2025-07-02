import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      {/* Full-page background */}
      <GridBackgroundDemo />

      {/* Foreground content */}
      <main className="position-relative z-1 text-white">
        <Home />
      </main>
    </>
  );
}

export default App;
