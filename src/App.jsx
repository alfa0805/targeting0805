import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Content from './pages/Content'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [tun, setTun] = useState(false)
  const tunbtn = () => {
    setTun(!tun)
  }
  return (
    <div className={`${tun? "bg-black" : "bg-white"}`}>
      <Header tun={tun} tunbtn={tunbtn}/>
      <Home tun={tun}/>
      <Services tun={tun}/>
      <Content tun={tun}/>
      <Projects tun={tun}/>
      <Contact tun={tun}/>
      <Footer tun={tun}/>
    </div>
  )
}

export default App
