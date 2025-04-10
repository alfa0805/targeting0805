import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"
import { MdLightMode, MdNightlight, MdOutlineMenuBook } from "react-icons/md"
import { BiSolidFoodMenu } from "react-icons/bi"


function Header({tun, tunbtn }) {

  const [menu,setMenu] = useState(false)
  const modal = () => {
    setMenu(!menu)
  }

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${tun? "headerbg shadow-lg" : "bg-white"} fixed w-full z-50 ${scroll ? "shadow-md" : ""}`}>
      <div className={`${tun? "headerbgtop" : "bg-white"} w-full`}>
          {/* container */}
          <div className="bg-none z-[1000] max-w-[1100px] h-[90px] mx-auto px-10 flex items-center justify-between relative">
            <a href="#" className="">
              <div className="w-[160px] flex items-center justify-between">
                <img src={Logo} alt="logo" className="w-[80px] h-full"/>
                <h1 className={`${tun? "text-white" : "text-black"} w-[80px] text-xl text-start font-medium`}>Bek Media</h1> 
              </div>
            </a>

            <div className="flex items-center justify-between gap-5 max-[770px]:hidden">
              <button onClick={tunbtn} className={`${tun? "text-amber-400" : "text-black"} border-2 rounded-md p-[1px] cursor-pointer text-3xl text-center font-bold `}>{tun? <MdLightMode /> : <MdNightlight />}</button>
              <a href="#aloqa">
                <button className="w-[200px] h-[55px] rounded-2xl bg-amber-400 text-xl font-bold cursor-pointer">Ariza yuborish</button>
              </a>
            </div>

            <button onClick={modal} 
              className={`${tun? "text-amber-500" : "text-gray-600"} text-3xl min-[770px]:hidden`}>
                {menu? <MdOutlineMenuBook />:<BiSolidFoodMenu />}
            </button>
          </div>
          {/* modal */}
          { menu ? 
            <div  data-aos="fade-down"
              className={`${tun? "bg-gray-600 shadow-md shadow-gray-500" : "bg-gray-100 shadow-md"} p-[10px] absolute w-full h-[100vh] left-0 top-[10px]`}>
              <ul className="flex flex-col items-center gap-10 pt-[79px]">
                <li className={`${tun? "text-white" : "text-black"} hover:text-amber-500 text-2xl font-bold`}>
                  <button onClick={()=>modal(false)} className="">
                    <a href="#home" className="">Asosiy</a>
                  </button>
                </li>
                <li className={`${tun? "text-white" : "text-black"} hover:text-amber-500 text-2xl font-bold`}>
                  <button onClick={()=>modal(false)} className="">
                    <a href="#about" className="">Biz haqimizda</a>
                  </button>
                </li>
                <li className={`${tun? "text-white" : "text-black"} hover:text-amber-500 text-2xl font-bold`}>
                  <button onClick={()=>modal(false)} className="">
                    <a href="#loyihalar" className="">Loyihalar</a>
                  </button>
                </li>
              </ul>
              <div className="flex items-center flex-col justify-between gap-10 pt-10">
                <a href="#aloqa">
                  <button onClick={()=>modal(false)} className="w-[160px] h-[40px] rounded-2xl bg-amber-400 text-lg font-bold cursor-pointer">Ariza yuborish</button>
                </a>
                <button onClick={()=>{tunbtn();modal(false)}} className={`${tun? "text-amber-400" : "text-black"} border-2 rounded-md p-[1px] cursor-pointer text-2xl text-center font-bold `}>{tun? <MdLightMode /> : <MdNightlight />}</button>
              </div>
            </div>
            : ""
          }
      </div>
    </header>
  )
}

export default Header

