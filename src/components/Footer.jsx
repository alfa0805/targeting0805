import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'

function Footer({tun}) {
  return (
    <footer className={`${tun? "bg-gray-600":"bg-black"}`}>
        <div className="max-w-[1100px] h-full mx-auto px-5 py-7 flex items-start justify-center max-[770px]:flex-col min-[770px]:justify-between">
            <p className={`${tun? "text-black":"text-white"}`}>Alisher Navoiy ko'chasi, 11A, Toshkent</p>
            <a href="" className="">
                <p className={`${tun? "text-black":"text-white"} flex items-center gap-2 text-lg font-medium hover:text-amber-400`}><FaInstagram />Instagram</p>
            </a>
            <div className="">
                <a href="tell:+998 77 362 88 88" className="">
                    <p className={`${tun? "text-black":"text-white"} flex items-center gap-2 text-lg font-medium hover:text-amber-400`}><IoCall />+998 77 362 88 88</p>
                </a>
                <a href="" className="">
                    <p className={`${tun? "text-black":"text-white"} flex items-center gap-2 text-lg font-medium hover:text-amber-400`}><HiOutlineMail />izzatbek.latifovuz@gmail.com</p>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
