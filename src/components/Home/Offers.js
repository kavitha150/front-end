// import React from "react";
// import { FaNetworkWired, FaDatabase, FaCloud, FaServer, FaDesktop ,FaShieldAlt} from "react-icons/fa";
// import middleImage from "../assets/middle.png";

// const Offers = () => {
//   const offers = [
//     { title: "Network Security", description: "We bring the right people together to challenge established thinking.", icon: <FaNetworkWired /> },
//     { title: "Database Security", description: "We bring the right people together to challenge established thinking.", icon: <FaDatabase /> },
//     { title: "IT Infrastructure", description: "We bring the right people together to challenge established thinking.", icon: <FaServer /> },
//     { title: "Web Security", description: "We bring the right people together to challenge established thinking.", icon: <FaDesktop /> },
//     { title: "Cloud Security", description: "We bring the right people together to challenge established thinking.", icon: <FaCloud /> },
//     { title: "Monitoring Security", description: "We bring the right people together to challenge established thinking.", icon: <FaShieldAlt /> },
//   ];

//   return (
//     <div className="offers-container">
//       <h3 className="offers-title">OFFERS</h3>
//       <h2 className="offers-subtitle">What We Offer</h2>
//       <p className="offers-description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
//       </p>
//       <div className="offers-grid">
//         {offers.slice(0, 3).map((offer, index) => (
//           <div key={index} className="offer-card">
//             <div className="icon">{offer.icon}</div>
//             <h4>{offer.title}</h4>
//             <p>{offer.description}</p>
//           </div>
//         ))}
             
//         </div>
//         {offers.slice(3).map((offer, index) => (
//           <div key={index} className="offer-card">
//             <div className="icon">{offer.icon}</div>
//             <h4>{offer.title}</h4>
//             <p>{offer.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Offers;


// import React from "react";
// import { FaNetworkWired, FaDatabase, FaCloud, FaServer, FaDesktop, FaShieldAlt } from "react-icons/fa";
// import middleImage from "../assets/middle.png"; // Ensure the path is correct

// const Offers = () => {
//   const offers = [
//     { title: "Network Security", description: "We bring the right people together to challenge established thinking.", icon: <FaNetworkWired /> },
//     { title: "Database Security", description: "We bring the right people together to challenge established thinking.", icon: <FaDatabase /> },
//     { title: "IT Infrastructure", description: "We bring the right people together to challenge established thinking.", icon: <FaServer /> },
//     { title: "Web Security", description: "We bring the right people together to challenge established thinking.", icon: <FaDesktop /> },
//     { title: "Cloud Security", description: "We bring the right people together to challenge established thinking.", icon: <FaCloud /> },
//     { title: "Monitoring Security", description: "We bring the right people together to challenge established thinking.", icon: <FaShieldAlt /> },
//   ];

//   return (
//     <div className="offers-container">
//       <h3 className="offers-title">OFFERS</h3>
//       <h2 className="offers-subtitle">What We Offer</h2>
//       <p className="offers-description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis mauris ac enim sagittis dignissim.
//       </p>

//       {/* Center Image */}
//       <div className="middle-image-container">
//         <img src={middleImage} alt="Reactive Offers" className="middle-image" />
//       </div>

//       {/* Offers Grid */}
//       <div className="offers-grid">
//         {offers.map((offer, index) => (
//           <div key={index} className="offer-card">
//             <div className="icon">{offer.icon}</div>
//             <h4>{offer.title}</h4>
//             <p>{offer.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Offers;






import React from "react";
import { FaNetworkWired, FaDatabase, FaCloud, FaServer, FaDesktop, FaShieldAlt } from "react-icons/fa";

import middleImage from "../../assets/middle-removebg-preview.png";


const Offers = () => {
  const offers = [
    { title: "Network Security", description: "Safeguard your systems with advanced protection against threats to ensure seamless connectivity.", icon: <FaNetworkWired /> },
    { title: "Database Security", description: "Protect your sensitive data with our reliable and robust database security solutions.", icon: <FaDatabase /> },
    { title: "IT Infrastructure", description: "Optimize and secure your IT operations with a tailored infrastructure to meet your needs.", icon: <FaServer /> },
    { title: "Web Security", description: "Enhance your online presence with our cutting-edge solutions to protect websites and applications from threats and vulnerabilities.", icon: <FaDesktop /> },
    { title: "Cloud Security", description: "Ensure the safety of your data in the cloud with advanced protection and compliance services tailored to your needs.", icon: <FaCloud /> },
    { title: "Monitoring Security", description: "Stay ahead of threats with real-time monitoring and analytics to safeguard your systems and data.",icon: <FaShieldAlt /> },
  ];

  return (
    <div className="offers-container">
      <h3 className="offers-title">Services</h3>
      <h2 className="offers-subtitle">What We Offer</h2>
      <p className="offers-description">
        
        Explore our wide range of professional services designed to protect and enhance your business operations.
      </p>

      {/* Offers Top Row */}
      <div className="offers-grid">
        {offers.slice(0, 3).map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="icon">{offer.icon}</div>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>

      {/* Center Image */}
      <div className="middle-image-container">
        <img src={middleImage} alt="Reactive Offers" className="middle-image" />
      </div>

      {/* Offers Bottom Row */}
      <div className="offers-grid">
        {offers.slice(3).map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="icon">{offer.icon}</div>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
