// import React from 'react';
// import { Headphones, Shield, Lock, Award } from 'lucide-react';

// const Services = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-black text-white p-6">
//       <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//         <div className="text-teal-400 text-3xl mb-4">
//           <Headphones />
//         </div>
//         <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
//         <p className="text-gray-400 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>
//       </div>
//       <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//         <div className="text-teal-400 text-3xl mb-4">
//           <Shield />
//         </div>
//         <h3 className="text-xl font-bold mb-2">Security Service</h3>
//         <p className="text-gray-400 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>
//       </div>
//       <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//         <div className="text-teal-400 text-3xl mb-4">
//           <Lock />
//         </div>
//         <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
//         <p className="text-gray-400 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>
//       </div>
//       <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//         <div className="text-teal-400 text-3xl mb-4">
//           <Award />
//         </div>
//         <h3 className="text-xl font-bold mb-2">Industry Certified</h3>
//         <p className="text-gray-400 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import { FaHeadphones, FaShieldAlt, FaLock, FaAward } from "react-icons/fa";


const Services = () => {
  const servicesData = [
    {
      icon: <FaHeadphones />,
      title: "24/7 Support",
      description:
      "Our dedicated support team is available 24/7 to assist you with any questions or issues. We're here to ensure your experience is seamless and stress-free."
      ,
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Service",
      description:
      "Protecting your data and ensuring secure operations is our top priority. We offer cutting-edge security services to safeguard your information."
        ,
    },
    {
      icon: <FaLock />,
      title: "Data Privacy",
      description:
      "Your privacy is our commitment. We ensure your personal data is handled with the utmost confidentiality and in compliance with the latest standards."
       ,
    },
    {
      icon: <FaAward />,
      title: "Industry Certified",
      description:
      "Our services meet industry standards and certifications, providing you with the assurance of quality and professionalism in every solution we deliver."

        ,
    },
  ];

  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;


