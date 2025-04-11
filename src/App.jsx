import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TechStack from './components/TechStack/TechStack'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import About from './components/About/About'
import ClickSpark from '../ReactBits/ClickSpark/ClickSpark'
import Particles from '../ReactBits/Particles/Particles'

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Expose loading state to child components through window
  // This is a simple approach instead of using context
  window.setAppLoading = setIsLoading;

  return (
    <Router>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="app-container" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          {/* Particle Background */}
          {/* <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: -1 
          }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div> */}

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

          {/* Foreground Content */}
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home setLoading={setIsLoading} />} />
              <Route path="/work" element={<Work setLoading={setIsLoading} />} />
              <Route path="/about" element={<About setLoading={setIsLoading} />} />
              <Route path="/tech-stack" element={<TechStack setLoading={setIsLoading} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ClickSpark>
    </Router>
  )
}

export default App