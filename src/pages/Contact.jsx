import React, { useState } from 'react'

function Contact({tun}) {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const BOT_TOKEN = "7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM"; // Bot tokenni shu yerga yoz
        const CHAT_ID = "1957552716"; // Chat ID ni shu yerga yoz
    
        const message = `📝 *Yangi xabar:*\n👤 *Ism:* ${formData.name}\n📞 *Telefon:* +998${formData.phone}\n💬 *Xabar:* ${formData.message}`;
    
        try {
          const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "Markdown" }),
            }
          );
    
          if (response.ok) {
            setSuccess(true);
            setFormData({ name: "", phone: "", message: "" });
            setTimeout(() => setSuccess(false), 1500);
          } else {
            console.error("Xatolik yuz berdi!");
          }
        } catch (error) {
          console.error("Telegramga ulanib bo‘lmadi!", error);
        }
    
        setLoading(false);
      };
  return (
  <div className="">
    <div id="aloqa" className="max-w-[1100px] h-full mx-auto py-[120px] px-5 max-[770px]:py-[45px]">
        <h1 data-aos="zoom-in-up" className={`${tun?"text-white":"text-black"} text-4xl font-bold w-[43%]`}>
            Sotuvlaringizni oshirishni istaysizmi?
            <span className="text-amber-400"> Bepul audit xizmatimizdan foydalaning!</span>
        </h1>
        <p data-aos="zoom-in-up" className={`${tun?"text-white":"text-black"} text-xl font-medium w-[50%] pt-4`}>Bizning jamoamiz har doim yangi loyihalarga tayyor, so'rov qoldiring va biz tez orada siz bilan bog'lanamiz!</p>
        <form data-aos="zoom-in-up" onSubmit={handleSubmit} className="space-y-1 grid grid-cols-4 gap-5 pt-[90px] max-[890px]:grid-cols-2 max-[770px]:grid-cols-1">
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            required
            className=" placeholder:text-gray-500 shadow-md w-full p-3 bg-gray-200 text-gray-800 rounded-2xl outline-none"
          />
          <div className="flex shadow-md items-center bg-gray-200 text-white rounded-2xl">
            <span className="pl-3 text-gray-900">+998</span>
            <input
              type="number"
              name="phone"
              placeholder="90 123 45 67"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full text-gray-800 p-3 bg-transparent outline-none"
            />
          </div>
          <input
            type="text"
            name="message"
            placeholder="Biznesingiz turi"
            value={formData.message}
            onChange={handleChange}
            required
            className=" placeholder:text-gray-500 shadow-md w-full p-3 bg-gray-200 text-gray-800 rounded-2xl outline-none"
          />
          <button
            type="submit"
            className={`w-full p-2 shadow-lg text-white hover:text-amber-500 font-bold rounded-xl transition-all ${
              loading ? "bg-gray-100 cursor-not-allowed" : "bg-amber-500 hover:bg-transparent border-2 border-amber-500"
            }`}
            disabled={loading}
          >
            {loading ? "Yuborilmoqda":"Yuborish"}
          </button>
          {success  && 
            <p className="w-full h-full bg-[#000000bb] text-center fixed top-[0px] left-0 flex items-center justify-center">
                <span className="w-[500px] max-[770px]:w-[350px] max-[770px]:text-2xl max-[550px]:w-[290px]  max-[550px]:py-[10px]
                    max-[550px]:text-xl  font-medium py-5 rounded-md bg-white text-amber-500 text-3xl">
                    Yuborildi
                </span>
            </p> 
          }
        </form>
    </div>
  </div>
  )
}

export default Contact
