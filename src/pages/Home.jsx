import { FaMoneyBillTrendUp } from "react-icons/fa6"
import homebg from "../assets/custom-hero.png"
function Home({tun}) {
  return (
    <nav id="home">
        <div className={`${tun? "" : ""} max-w-[1100px] h-full py-5 mx-auto px-5 pt-[100px]`}>
          <div className={`flex items-start justify-center gap-10 flex-wrap`}>
            <div data-aos="fade-up" className=" w-[45%] max-[770px]:w-full">
              <h2 data-aos="zoom-in-up" className={`${tun? "text-white" : "text-black"} max-[770px]:text-4xl max-[770px]:text-center max-[770px]:w-full mb-[30px] text-5xl font-bold leading-[60px] `}>
                <span className="text-amber-400 border-b-4 pr-2">34 Kun</span>ichida Savdolaringizni <span className="text-amber-400 border-b-4 px-2"> 70% gacha </span>oshiring!</h2>
              <div data-aos="fade-up" className={`${tun? "bg-gray-700 shadow-gray-500" : "bg-gray-100"} 
                rounded-lg w-full h-full flex flex-col items-center gap-10 p-5 shadow-lg`}>
                  <FaMoneyBillTrendUp className={`${tun? "text-amber-400" : "text-gray-700"} text-3xl`}/>
                  <p className={`${tun? "text-white" : "text-black"} text-2xl text-center font-medium`}>Kechagidan ko'proq soting</p>
              </div>
              <div data-aos="fade-up" className={`${tun? "bg-gray-700 shadow-gray-500" : "bg-gray-100"} 
                rounded-lg w-full h-full mt-[25px] flex flex-col items-center gap-5 p-5 shadow-lg`}>
                  <p className={`${tun? "text-white" : "text-black"} text-xl text-center font-medium`}>O'ylab otirishga xojat yo'q deb nomlangan <span className="text-amber-500 font-bold">Garantiya</span></p>
                  <p className={`${tun? "text-white" : "text-black"} text-xl text-center font-medium`}>Savdo hajmi yaxshi tomonga o'zgarmasa xizmat pulini <span className="text-amber-500 font-bold">100%</span>qaytaramiz!</p>
              </div>
            </div>

            <div data-aos="fade-up" className="w-[45%] h-full max-[770px]:w-[450px] max-[500px]:w-full">
              <img src={homebg} alt="img" className="w-full h-full" />
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Home
