import React from 'react'
import cheak from "../assets/1.svg"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"



function Services({tun}) {
  const map = [
    {img:icon1, title:"Digital Marketing", text:"Ijtimoiy media, kontent va qidiruv tizimini optimallashtirish kabi keng qamrovli marketing strategiyalari bilan onlayn salohiyatingizni maksimal darajada oshirish."},
    {img:icon2, title:"Target", text:"Maqsadli ijtimoiy media va qidiruv kampaniyalari bilan maqsadli auditoriyangizga erishing. Maqsadli reklama yordamida konversiyalarni oshiring."},
    {img:icon3, title:"IT yechimlar", text:"Operatsiyalaringizni optimal-lashtirish uchun moslashtirilgan texnologik echimlar, jumladan, dasturiy ta'minot va bulutli texnologiyalar."},
    {img:icon4, title:"Website", text:"Korporativdan tortib onlayn-do'konlargacha kuchli onlayn mavjudlik uchun noyob va funktsional veb-saytlarni yarating."},
    {img:icon5, title:"Google & Yandex Reklama", text:"Maqsadli auditoriyangizni jalb qilib, samarali Google va Yandex kompaniyalar yordamida brendingizning ko'rinishini maksimal darajada oshiring."},
  ]
  return (
    <div id="about" className="max-w-[1100px] h-full mx-auto px-5 pt-10">
      {/* grid */}
      <div className="flex items-start justify-center gap-10 max-[770px]:flex-col">
        <div data-aos="zoom-in-up" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg w-[58%] h-[490px] p-10 rounded-xl flex flex-col justify-between items-start max-[770px]:w-full max-[500px]:h-full`}>
          <div className="">
            <h1 className="text-amber-500 text-5xl font-bold max-[500px]:text-4xl">Biz</h1>
            <h1 className="text-amber-500 text-5xl font-bold max-[500px]:text-4xl">Haqimizda</h1>
          </div>
          <p className={`${tun? "text-white" : "text-black"} text-3xl font-semibold pt-[25px] max-[500px]:text-2xl`}>
              Bek media agentligida biz shunchaki reklama qilishdan ko'proq narsani qilamaiz; ajoyib tajribalar yaratamiz. Jamoamiz bilan birgalikda sizning brendingiz uchun raqamli yechimlar bera olamiz.
          </p>
        </div>

        <div className="w-[38%] h-full max-[770px]:w-full">
          <div className="w-full h-full flex items-center justify-between">
           <div data-aos="zoom-in-right" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg w-[28%] h-[150px] rounded-xl`}></div>
           <div data-aos="zoom-in-left" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg p-5 w-[68%] h-[150px] rounded-xl`}>
             <h2 className={`${tun? "text-white" : "text-black"} text-5xl font-bold`}>6 yil</h2>
             <h2 className={`${tun? "text-white" : "text-black"} text-3xl pt-5 font-bold`}>tajriba</h2>
           </div>
         </div>

         <div className="w-full h-full flex items-center justify-between mt-5">
            <div data-aos="zoom-in-right" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg p-5 w-[68%] h-[150px] rounded-xl`}>
             <h2 className={`${tun? "text-white" : "text-black"} text-5xl font-bold`}>100+</h2>
             <h2 className={`${tun? "text-white" : "text-black"} text-3xl pt-5 font-bold`}>Loyiha</h2>
            </div>
            <div data-aos="zoom-in-left" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg w-[28%] h-[150px] rounded-xl`}></div>
         </div>

         <div className="w-full h-full flex items-center justify-between mt-5">
            <div data-aos="zoom-in-right" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg w-[28%] h-[150px] rounded-xl`}></div>
            <div data-aos="zoom-in-left" className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} shadow-lg p-5 w-[68%] h-[150px] rounded-xl`}>
              <h2 className={`${tun? "text-white" : "text-black"} text-5xl font-bold`}>3+</h2>
              <h2 className={`${tun? "text-white" : "text-black"} text-2xl pt-5 font-bold`}>davlat mijozlari</h2>
            </div>
          </div>
        </div>
      </div>
      {/* malumot */}
      <div className="w-full grid grid-cols-3 gap-10 pt-[50px] max-[990px]:grid-cols-2 max-[770px]:grid-cols-1">
        <div data-aos="zoom-in-up" className="">
          <div className="flex items-center gap-2">
            <img src={cheak} alt="cheak" className="w-[27px]"/>
            <p className="text-[#03606b] font-bold text-2xl">Biz nimalar qila olamiz</p>
          </div>
          <p className={`${tun? "text-white":"text-black"} text-5xl font-bold`}>6 yildan beri kun u tun nima qilamiz:</p>
        </div>
        {map.map((item, index)=>(
          <div data-aos="zoom-in-up" key={index} className={`${tun?"bg-gray-700 border-[#03606b] shadow-gray-600":"bg-gray-100 border-[#c6c6c6] shadow-[#e0e0e0]"} 
            w-full h-[400px] border-2 rounded-lg p-5 flex flex-col max-[770px]:items-center shadow-lg`}>
            <div className="w-[90px] h-[90px]">
              <img src={item.img} alt={item.title} className="w-full h-full"/>
            </div>
            <h2 className={`${tun? "text-white" : "text-black"} text-3xl font-bold pt-5`}>{item.title}</h2>
            <p className={`${tun? "text-white" : "text-black"} text-xl font-medium pt-5`}>{item.text}</p>
          </div>
        ))
          
        }
      </div>
    </div>
  )
}

export default Services
