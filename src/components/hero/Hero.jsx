import React from 'react'
import bgImg from "../../assets/bg.jpg";

function Hero() {
  return (
          <div
          className="bg-cover w-full min-h-screen flex items-center justify-start text-center mt-[-51px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="max-w-lg pl-8 flex flex-col text-start p-4 mb-10">
            <p className="text-white text-[18px] font-bold text-start"> 
              Unlocking Innovation: Tailored Tech Solutions
            </p>
            <span className="text-white text-[44px] block mb-2 font-black leading-snug text-start">
              Your Software <span className="text-[#c9b6ff]"> Solution </span>
              Partner
            </span>
            <p className="text-white text-[14px] font-bold mb-6 text-start">
              Our company is a leading provider of front-end React development
              services based in the USA, with a team of highly skilled
              professionals.
            </p>
            <button className="text-black font-semibold shadow-slate-700 shadow-md w-[270px] bg-[#7555ff] py-3 rounded-[40px] hover:bg-blue-700 transition duration-300">
              <a href="/assets/brochure.pdf" download="brochure.pdf">
                DOWNLOAD BROCHURE
              </a>
            </button>
          </div>
        </div>
  )
}

export default Hero