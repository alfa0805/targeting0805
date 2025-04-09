import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Content from './pages/Content'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const [tun, setTun] = useState(false)
  const tunbtn = () => {
    setTun(!tun)
  }
      useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false, 
        });
      }, []);
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
