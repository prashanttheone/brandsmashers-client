import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slick.css';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // Tablet and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // Mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Testimonial() {
  const Items = [
    {
      img: "https://www.livehindustan.com/lh-img/uploadimage/library/2024/01/15/16_9/16_9_6/ram_ji_1705330739.jpg",
      name: "John Doe",
      designation: "CEO, Example Co.",
      message:
        "This company provided excellent service and delivered exceptional results!",
    },
    {
      img: "https://www.livehindustan.com/lh-img/uploadimage/library/2024/01/15/16_9/16_9_6/ram_ji_1705330739.jpg",
      name: "Jane Smith",
      designation: "Marketing Head, XYZ Ltd.",
      message:
        "Highly recommended for their professionalism and commitment to customer satisfaction.",
    },
    {
      img: "https://www.livehindustan.com/lh-img/uploadimage/library/2024/01/15/16_9/16_9_6/ram_ji_1705330739.jpg",
      name: "Mike Johnson",
      designation: "CTO, TechCorp",
      message:
        "Great experience working with this team. They exceeded our expectations.",
    },
  ];

  return (
    <div className="bg-white w-full pt-20 p-10 lg:mx-10 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#7645FF] mb-4 text-center">
        Testimonial
      </h1>
      <p className="text-center text-xl">
        Explore testimonials that highlight our dedication to exceeding client
        expectations and delivering exceptional results.
      </p>

      {/* Slider with testimonials */}
      <div className="mx-auto max-w-[1200px] ">
        <Slider {...settings}>
          {Items.map((item, index) => (
            <div
              key={index}
              className="max-w-[550px] h-[311px] border border-black rounded-lg shadow-xl p-6 flex flex-col justify-between mx-auto">
              <div className="flex items-center mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[100px] h-[100px] rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.designation}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{item.message}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
