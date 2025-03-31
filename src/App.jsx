import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TechStack from './components/TechStack/TechStack'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import About from './components/About/About' // Assuming you have an About component

function App() {
  return (
    <Router>
      <div className="app-container">
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
    </Router>
  )
}

export default App