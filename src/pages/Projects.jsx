import React from 'react'
import img1 from "../assets/star-remove.png";
import img2 from "../assets/uy-remove.png";
import img3 from "../assets/shake-remove.png";
import img4 from "../assets/buxoriy.png";
import img5 from "../assets/yostiq-remove.png";
import img6 from "../assets/oyinchoq.jpg";
import img7 from "../assets/erkak-kiyim.jpg";
import img8 from "../assets/itTime-remove.png";

function Projects({tun}) {
    const imgs = [
        {img:img1,},
        {img:img2,},
        {img:img3,},
        {img:img4,},
        {img:img5,},
        {img:img6,},
        {img:img7,},
        {img:img8,},
    ]
  return (
    <div id="project" className="max-w-[1100px] h-full mx-auto">
        <div className={`${tun?"bg-gray-700 border-[#03606b] shadow-gray-600":"bg-gray-100 border-[#d2d2d2] shadow-[#e0e0e0]"} border-2 shadow-lg rounded-xl p-10 flex flex-col items-center gap-7`}>
            <h2 data-aos="flip-up" className={`${tun?"text-white" : "text-black"} 
                text-5xl font-bold max-[770px]:text-3xl text-center`}>
                BIZNING MIJOZLARIMIZ 
            </h2>
            <p data-aos="flip-up" className={`${tun?"text-white" : "text-black"} text-xl 
                font-medium max-[770px]:md text-center`}>
                Bizga ishonch bildirgan kompaniyalar
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
                {imgs.map((images, index) => (
                    <div data-aos="zoom-in-up" key={index} className="w-[200px] h-[200px] p-5 bg-white rounded-xl shadow-md shadow-gray-400">
                        <img src={images.img} alt="img" className="w-full h-full object-cover  rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
