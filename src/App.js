import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Error from './components/error/Error'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import OthersProject from './components/othersProject/OthersProject'
import Project from './components/project/Project'
import Projects from './components/projects/Projects'
import TopButton from './components/topButton/TopButton'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
              <About />
              <Experience />
              <Projects />

              <Contact />
              <Footer />
              <TopButton />
            </div>
          }
        />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/othersProject" element={<OthersProject />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
