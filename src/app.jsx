import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Contac from './components/Contac'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Intro from './components/animation/Intro'
import Header from './components/animation/Header'

function App () {
  return (
    <BrowserRouter>
      <Intro />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contac />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
