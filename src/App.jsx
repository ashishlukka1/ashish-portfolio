import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TechStack from './components/TechStack/TechStack'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import About from './components/About/About'
import ClickSpark from '../ReactBits/ClickSpark/ClickSpark'
import Particles from '../ReactBits/Particles/Particles' // Make sure the path is correct

function App() {
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
          <div style={{ 
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
          </div>

          {/* Foreground Content */}
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/tech-stack" element={<TechStack />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ClickSpark>
    </Router>
  )
}

export default App
