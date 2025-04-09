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
      duration: 800, 
      once: false, 
      easing: "ease-in",
    });
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);
  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white dark:bg-gray-800">
      <div className="w-20 h-20 border-4 border-amber-400 border-dashed rounded-full animate-spin custom-spin" />
    </div>
  );  
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
