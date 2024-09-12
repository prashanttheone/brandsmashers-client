import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4">BRANDSMASHERS</h1>
          <p className="text-gray-300 mb-4">
            BrandSmashers is your one-stop destination for cutting-edge IT solutions. Specializing in web development, app development, desktop apps, graphic design, cloud services, and cybersecurity, we empower businesses to thrive in the digital landscape. With expertise, innovation, and a customer-centric approach, we deliver bespoke solutions that elevate brands and drive success. Trust BrandSmashers to revolutionize your digital presence and stay ahead of the curve.
          </p>
          <p className="text-gray-400">hr@brandsmashers.com</p>
          <p className="text-gray-400">Ashoka Garden, Bhopal, MP, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-gray-200">About</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-gray-200">Services</a></li>
            <li><a href="/blogs" className="text-gray-400 hover:text-gray-200">Blogs</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li className="font-bold">WEB & MOBILE</li>
            <li className="text-gray-400">Fullstack Engineering</li>
            <li className="text-gray-400">Mobile App Development</li>
            <li className="text-gray-400">iOS & Android</li>
            <li className="text-gray-400">Cross-Platform Mobile App Development</li>

            <li className="font-bold mt-4">CLOUD</li>
            <li className="text-gray-400">AWS</li>
            <li className="text-gray-400">Google Cloud Platform</li>
            <li className="text-gray-400">Kubernetes</li>

            <li className="font-bold mt-4">MACHINE LEARNING & AI</li>
            <li className="text-gray-400">Prediction, Recommendation, and Forecasting</li>
            <li className="text-gray-400">Chatbot Development</li>
            <li className="text-gray-400">Conversational AI</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500">&copy; 2024 BrandSmashers. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
