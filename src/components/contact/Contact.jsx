import axios from 'axios'; // Import axio
import React,{useState} from "react";
import bgImg from "../../assets/bg.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function Contact() {
  const Items = [
    { logo: <FaPhoneAlt />, name: "Phone", text: "9589713710" },
    { logo: <MdEmail />, name: "Email", text: "hr@brandsmashers.com" },
    { logo: <IoLocation />, name: "Address", text: "Ashoka Garden, Bhopal" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
      const response = await axios.post('https://brandshmers-server.vercel.app/save/save', formData)
   
        setFormData({
      name: "",
      email: "",
      message: "",
    });
         console.log("Response:", response);
    console.log("Form Data Submitted:", formData); 
      }
    catch (err){
      console.log("Error",err);
    }
  };

   
  return (
    <>
      <div
        className="bg-cover w-full h-screen flex flex-col items-center text-center mt-[-80px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Contact Header Section */}
        <div className="mt-[100px] max-w-[800px] text-center flex flex-col items-center text-gray-600 p-6   ">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-100">
            Get in touch with our expert team today to discuss your software
            needs, and take the first step towards digital transformation.
          </p>
        </div>

        {/* Let's collaborate */}
        <div className="mt-[10%]  w-full max-w-[700px] lg:min-h-[500px] flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg border border-black">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Let's collaborate
          </h2>
          <p className="mb-10 font-Poppins font-semibold text-start text-[18px] text-gray-600">
            Networking is key, so let's touch base regularly to ensure we're
            synchronized and working towards our common goals. Whether we meet
            up in person or virtually, let's unite our efforts and make a
            significant impact together.
          </p>
          <button className="bg-violet-600 px-8 py-4 rounded-[10px] text-white text-xl shadow-md">
            BOOK YOUR MEETING
          </button>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-[20%] mb-10">
        {Items.map((item, index) => (
          <div
            key={index}
            className="lg:w-[450px] h-[140px] w-full flex items-center bg-white p-6 sm:mx-2 gap-6 rounded-lg shadow-md border border-black"
          >
            <div className="text-3xl text-white mb-4 bg-blue bg-blue-950 p-3 rounded-[50%]">
              {item.logo}
            </div>
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-600 font-[14px] ">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map and Form */}
      <div className="w-full mt-20 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 lg:h-[580px] mb-20">

        {/* form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md">
            <p className="text-gray-600 text-lg mb-6">
              We are always open to discussing product{" "}
              <span className="font-bold">design work or partnerships.</span>
            </p>
            {/* form section */}
            <form className="space-y-10 " onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-gray-600 text-sm font-bold mb-2">
                  <input
                    className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    type="text"
                    placeholder="  Name *"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-bold mb-2">
                  <input
                    className="w-full border-b border-gray-300 py-2 focus:outline-none"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <textarea
                  className="w-full border-b border-gray-300 py-2 focus:outline-none"
                  id="message"
                  name="message"
                  placeholder="  Message *"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="google-map w-full lg:w-1/2 h-[300px] lg:h-auto mb-20 lg:mt-0">
          <iframe
            className="map w-full h-full rounded-md border"
            title="my location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.664234624544!2d77.41975479426222!3d23.255236028664818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69d7cf48696f%3A0xddbc57014db35da2!2sAshoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1711706916234!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
