import React from 'react'
import card_img1 from "../assets/oyinchoq.jpg";
import card_img2 from "../assets/erkak-kiyim.jpg";
import card_img3 from "../assets/card3.jpg";
import card_img4 from "../assets/card4.jpg";
import card_img5 from "../assets/telefon.jpg";
import card_img6 from "../assets/anhor2.jpg";
import card_img7 from "../assets/uzBisnesCard.jpg";
import card_img8 from "../assets/kasmetolog.jpg";
import card_img9 from "../assets/itTime.jpg";
import card_img10 from "../assets/honey.jpg";
import card_img11 from "../assets/ozdvkm.jpg";
import card_img12 from "../assets/imanem.jpg";
import card_img13 from "../assets/stolotolg3.jpg";
import card_img14 from "../assets/kiprik.jpg";
import { FaChartPie, FaCircle } from 'react-icons/fa';
import { GiEmptyHourglass } from 'react-icons/gi';



function Content({tun}) {

  const cards = [
    {number:"7000",img:card_img1,text:"Bolalar o'yinchoqlar do'koni. Bek media jamoasi va bolalar o'yinchoqlar do'koni jamoasi bilan hamkorlikda, kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."},
    {number:"4500",img:card_img2,text:"Erkaklar kiyimlari do'koni. Bek media jamoasi va erkaklar kiyimlari do'koni jamoasi bilan hamkorlikda, kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"4600",img:card_img3,text:" Respublika dermatologiya va venerologiya markazi. Bek media jamoasi va dermatologiya va venerologiya markazi jamoasi bilan hamkorlikda, kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"3022",img:card_img4,text:" Zamonaviy Aksessuarlar. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"1500",img:card_img5,text:"Telefon Oldi sotisi Iphone Samsung. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"1500",img:card_img6,text:"Anhor Park. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"1000",img:card_img7,text:"Uybozor. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"1899",img:card_img8,text:"Kosmetolog Dietolog. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"626",img:card_img9,text:"O'quvmarkaz It Dasturlash. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"865",img:card_img10,text:"Max Power tabiiy tog’ asali. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"500",img:card_img11,text:"Respublika dermatologiya va venerologiya markazi. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"474",img:card_img12,text:"Ayollar kiyimlari. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"200",img:card_img13,text:"Stomotolog. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},
    {number:"435",img:card_img14,text:"KIPRIK UZAYTIRISH Xizmatlari. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."},

  ]

  return (
    <div id="loyihalar" className="max-w-[1100px] h-full py-14 mx-auto px-5 flex flex-col items-center gap-10">
      <h1 className={`${tun?"text-white" : "text-black"} text-5xl font-semibold pb-10`}>LOYIHALAR</h1>
      { cards.map((card , index) => (
        <div key={index} className={`${tun?"bg-gray-700 shadow-gray-600" : "bg-gray-100 shadow-[#dbdbdb]"} 
          shadow-lg w-[85%] h-full p-10 rounded-xl flex items-center justify-between gap-10 max-[770px]:flex-col max-[670px]:w-full`}>
          <div className="w-full">
            <div className="flex items-start gap-2">
              <FaCircle className="text-amber-300 text-xl mt-[10px]"/>
              <div className="">
                <h2 className={`${tun? "text-white":"text-black"} text-5xl font-semibold`}>Target,</h2>
                <h2 className={`${tun? "text-white":"text-black"} text-5xl inline-block font-semibold`}>reklama</h2>
              </div>
            </div>
            <div className="flex items-center gap-1 pt-10">
              <GiEmptyHourglass className="text-amber-300 text-2xl p-0"/>
              <p className={`${tun? "text-white":"text-black"} text-xl font-medium`}> <span className="text-xl font-medium text-[#55b2c2b5]">Murojaatlar soni: </span>{card.number}</p>
            </div>
            <div className="flex gap-1 pt-10">
              <FaChartPie className="text-amber-300 text-5xl mt-[-6px]"/>
              <p className={`${tun? "text-white":"text-black"} text-xl font-normal`}> <span className="text-xl font-medium text-[#55b2c2b5]">Tahlil: </span>{card.text}</p>
            </div>
          </div>

          <div className="w-[450px] rounded-xl max-[670px]:w-full">
            <img src={card.img} alt="card.img" className="w-full h-full rounded-xl"/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
