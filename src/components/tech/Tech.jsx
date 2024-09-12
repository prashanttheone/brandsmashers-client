import React from "react";
import Fit from '/fitness.webp'; // Correct the import statement for the image

function Tech() {
  const items = [
    { img: Fit, heading: 'Real Estate' },
    { img: Fit, heading: 'Real Estate' },
    { img: Fit, heading: 'Real Estate' },
    { img: Fit, heading: 'Real Estate' },
    { img: Fit, heading: 'Real Estate' },
    { img: Fit, heading: 'Real Estate' },
  ];

  return (
    <div className="bg-white w-full pt-20">
      <div className="mt-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7645FF] mb-4">
          Our Tech Advantage
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Our expertise spans cutting-edge technologies across various
          industries, ensuring innovative solutions tailored to your specific
          needs. We transform challenges into opportunities for growth and
          efficiency.
        </p>
        {/* Card section */}
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[400px] max-w-[400px] flex bg-gray-100 rounded-lg shadow-lg p-4 items-center border border-black"
            >
              <img
                src={item.img}
                alt={item.heading}
                className="w-[100px] h-[100px] object-cover mr-4"
              />
              <h2 className="text-md sm:text-lg font-semibold">{item.heading}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;
