import { useState } from "react"
import Logo from "../assets/logo.png"
import { MdLightMode, MdNightlight, MdOutlineMenuBook } from "react-icons/md"
import { BiSolidFoodMenu } from "react-icons/bi"


function Header({tun, tunbtn }) {

  const [menu,setMenu] = useState(false)
  const modal = () => {
    setMenu(!menu)
  }
  return (
    <header className={`${tun? "headerbg shadow-lg" : "bg-white"} fixed w-full`}>
      <div className={`${tun? "headerbgtop" : "bg-white"} w-full`}>
          {/* container */}
          <div className="bg-none z-50 max-w-[1100px] h-[90px] mx-auto px-10 flex items-center justify-between relative">
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
            <div className={`${tun? "bg-gray-600" : "bg-gray-100"} p-[10px] absolute w-[220px] right-[3px] top-[103px] rounded-md`}>
              <ul className="flex flex-col items-center">
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
              <div className="flex items-center flex-col justify-between gap-5 pt-4">
                <a href="#aloqa">
                  <button onClick={()=>modal(false)} className="w-[160px] h-[40px] rounded-2xl bg-amber-400 text-lg font-bold cursor-pointer">Ariza yuborish</button>
                </a>
                <button onClick={tunbtn} className={`${tun? "text-amber-400" : "text-black"} border-2 rounded-md p-[1px] cursor-pointer text-2xl text-center font-bold `}>{tun? <MdLightMode /> : <MdNightlight />}</button>
              </div>
            </div>
            : ""
          }
      </div>
    </header>
  )
}

export default Header

