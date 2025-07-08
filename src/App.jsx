import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Original Portfolio Components
import Navbar from "./components/Original/Navbar/Navbar";
import TechStack from "./components/Original/TechStack/TechStack";
import HomeOriginal from "./components/Original/Home/Home";
import Footer from "./components/Original/Footer/Footer";
import Work from "./components/Original/Work/Work";
import About from "./components/Original/About/About";
import ClickSpark from "../ReactBits/ClickSpark/ClickSpark";

// Bento Components
import { GridBackgroundDemo } from "./components/Bento/GridBackgroundDemo";
import BentoHome from "./components/Bento/Home";

function LayoutOG({ children, isLoading }) {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div
        className="app-container font-poppins"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-12 h-12 animate-spin">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#ffffff"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="#ffffff"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          </div>
        )}
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  window.setAppLoading = setIsLoading;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="font-nunito">
            <GridBackgroundDemo />
            <main className="position-relative z-1 text-white">
              <BentoHome />
            </main>
          </div>
        }
      />

      <Route
        path="/og"
        element={
          <LayoutOG isLoading={isLoading}>
            <HomeOriginal setLoading={setIsLoading} />
          </LayoutOG>
        }
      />
      <Route
        path="/og/work"
        element={
          <LayoutOG isLoading={isLoading}>
            <Work setLoading={setIsLoading} />
          </LayoutOG>
        }
      />
      <Route
        path="/og/about"
        element={
          <LayoutOG isLoading={isLoading}>
            <About setLoading={setIsLoading} />
          </LayoutOG>
        }
      />
      <Route
        path="/og/tech-stack"
        element={
          <LayoutOG isLoading={isLoading}>
            <TechStack setLoading={setIsLoading} />
          </LayoutOG>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
