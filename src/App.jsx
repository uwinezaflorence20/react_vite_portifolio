import { useState } from 'react'
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Home from './components/Home';


function App() {
  return (
  <div>
    
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="AboutMe" element={<AboutMe/>}/>
      </Routes>
    </Router>
    <Home/>
  </div>
  )
}

export default App
