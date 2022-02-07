import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import TopButton from './components/topButton/TopButton'

function App() {

  return (
    
    <div className="App">
      <Home />
      <About/>
      <Experience />
      {/* <Portfolio/> */}

      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}


export default App
