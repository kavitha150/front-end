// // // // 
// // // import React, { useState } from "react";
// // // import RotatingImage from "./Home/RotatingImage";

// // // import AboutUs from "./Home/AboutUs";
// // // import Services from "./Home/Services";
// // // import Stats from "./Home/Stats";
// // // import TrustedBy from "./Home/TrustedBy";
// // // import Offers from "./Home/Offers";
// // // import ContactSection from "./Home/ContactSection";
// // // import Footer from "../common/Footer";

// // // // Import images from src/assets
// // // import shieldImg from "../assets/shields.jpg";
// // // import modelImg1 from "../assets/moedel1.jpg";
// // // import modelImg2 from "../assets/3dmodel.jpg";

// // // import "./Home/Home.css";

// // // const Home = () => {
// // //   // State to toggle the visibility of the main content
// // //   const [showMainContent, setShowMainContent] = useState(true);

// // //   // Array of images for rotating image component
// // //   const images = [shieldImg, modelImg1, modelImg2];

// // //   // Function to handle button click
// // //   const handleButtonClick = () => {
// // //     setShowMainContent(false); // Hide the main content
// // //   };

// // //   return (
// // //     <>
// // //       {showMainContent && (
// // //         <main className="main-content">
// // //           {/* Header Section */}
// // //           <header>
// // //             <h2>Enhance Your Cybersecurity</h2>
// // //             <p>
// // //               Our platform offers a comprehensive suite of tools to enhance
// // //               cybersecurity intelligence. Leverage advanced technologies to
// // //               detect threats, analyze risks, and safeguard your digital assets.
// // //             </p>
// // //           </header>

// // //           {/* Flexbox Layout for Rotating Image and Capabilities Section */}
// // //           <div
// // //             className="content-wrapper"
// // //             style={{
// // //               display: "flex",
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //               gap: "20px",
// // //               marginTop: "40px",
// // //             }}
// // //           >
// // //             {/* Left: Rotating Image */}
// // //             <div className="image-container">
// // //               <RotatingImage images={images} interval={3000} />
// // //             </div>

// // //             {/* Right: Capabilities Section */}
// // //             <section className="capabilities-section">
// // //               <h3>Capabilities</h3>
// // //               <ul>
// // //                 <li>🔍 Real-time threat detection and analysis</li>
// // //                 <li>🤖 AI-powered malware and phishing prevention</li>
// // //                 <li>📰 Stay updated with the latest cybersecurity news</li>
// // //                 <li>🌐 Dark web monitoring for leaked credentials</li>
// // //               </ul>
// // //             </section>
// // //           </div>
// // //         </main>
// // //       )}

// // //       {/* Additional Sections */}
// // //       <Services />
// // //       <AboutUs />
// // //       <TrustedBy />
// // //       <Stats />
// // //       <Offers />
// // //       <ContactSection />

// // //       {/* Footer */}
// // //       <Footer />
// // //     </>
// // //   );
// // // };

// // // export default Home;


// // import React, { useState } from "react";
// // import RotatingImage from "./Home/RotatingImage";

// // import AboutUs from "./Home/AboutUs";
// // import Services from "./Home/Services";
// // import Stats from "./Home/Stats";
// // import TrustedBy from "./Home/TrustedBy";
// // import Offers from "./Home/Offers";
// // import ContactSection from "./Home/ContactSection";
// // import Footer from "../common/Footer";

// // // Import images from src/assets
// // import shieldImg from "../assets/shields.jpg";
// // import modelImg1 from "../assets/moedel1.jpg";
// // import modelImg2 from "../assets/3dmodel.jpg";

// // import "./Home/Home.css";

// // const Home = () => {
// //   const [showMainContent, setShowMainContent] = useState(true);

// //   // Array of images for rotating image component
// //   const images = [shieldImg, modelImg1, modelImg2];

// //   return (
// //     <>
// //       {showMainContent && (
// //         <main className="main-content">
// //           {/* Header Section */}
// //           <header>
// //             <h2>Enhance Your Cybersecurity</h2>
// //             <p>
// //               Our platform offers a comprehensive suite of tools to enhance
// //               cybersecurity intelligence. Leverage advanced technologies to
// //               detect threats, analyze risks, and safeguard your digital assets.
// //             </p>
// //           </header>

// //           {/* Flexbox Layout for Capabilities and Rotating Image Section */}
// //           <div className="content-wrapper">
// //             {/* Left: Capabilities Section */}
// //             <section className="capabilities-section">
// //               <h3>Capabilities</h3>
// //               <ul>
// //                 <li>🔍 Real-time threat detection and analysis</li>
// //                 <li>🤖 AI-powered malware and phishing prevention</li>
// //                 <li>📰 Stay updated with the latest cybersecurity news</li>
// //                 <li>🌐 Dark web monitoring for leaked credentials</li>
// //               </ul>
// //             </section>

// //             {/* Right: Rotating Image */}
// //             <div className="image-container">
// //               <RotatingImage images={images} interval={3000} />
// //             </div>
// //           </div>
// //         </main>
// //       )}

// //       {/* Additional Sections */}
// //       <Services />
// //       <AboutUs />
// //       <TrustedBy />
// //       <Stats />
// //       <Offers />
// //       <ContactSection />

// //       {/* Footer */}
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Home;


// import React, { useState } from "react";
// import RotatingImage from "./Home/RotatingImage";
// import AboutUs from "./Home/AboutUs";
// import Services from "./Home/Services";
// import Stats from "./Home/Stats";
// import TrustedBy from "./Home/TrustedBy";
// import Offers from "./Home/Offers";
// import ContactSection from "./Home/ContactSection";
// import Footer from "../common/Footer";

// // Import images
// import shieldImg from "../assets/shields.jpg";
// import modelImg1 from "../assets/moedel1.jpg";
// import modelImg2 from "../assets/3dmodel.jpg";

// import "./Home/Home.css";

// const Home = () => {
//   const [zoomed, setZoomed] = useState(false);

//   const images = [shieldImg, modelImg1, modelImg2];

//   const handleZoom = () => {
//     setZoomed(!zoomed);
//   };

//   return (
//     <>
//       <main className="main-content">
//         {/* Header Section */}
//         <header>
//         <div style={mainContentStyle}>
//       <p style={descriptionTextStyle}>
//         Our platform offers a comprehensive suite of tools to enhance cybersecurity intelligence.
//         Leverage advanced technologies to detect threats, analyze risks, and safeguard your digital assets.
//       </p>
//     </div>
//  </header>

//  const mainContentStyle = {
//   textAlign: "center",
//   padding: "40px",
//   backgroundColor: "#203a43", // Dark background matching the style
// };

// const descriptionTextStyle = {
//   fontSize: "1.5rem", // Larger font size
//   lineHeight: "1.8", // Proper spacing between lines
//   color: "white", // White text color
//   textAlign: "center", // Center-aligned text
//   margin: "20px 0", // Spacing around the text
// };

//         {/* Flexbox Layout for Rotating Image and Capabilities Section */}
//         <div className="content-wrapper">
//           {/* Left: Capabilities Section */}
//           <section className="capabilities-section">
//             <h3>Capabilities</h3>
//             <ul>
//               <li>🔍 Real-time threat detection and analysis</li>
//               <li>🤖 AI-powered malware and phishing prevention</li>
//               <li>📰 Stay updated with the latest cybersecurity news</li>
//               <li>🌐 Dark web monitoring for leaked credentials</li>
//             </ul>
//           </section>

//           {/* Right: Rotating Image */}
//           <div className={`image-container ${zoomed ? "zoomed" : ""}`} onClick={handleZoom}>
//             <RotatingImage images={images} interval={3000} />
//           </div>
//         </div>
//       </main>

//       {/* Additional Sections */}
//       <Services />
//       <AboutUs />
//       <TrustedBy />
//       <Stats />
//       <Offers />
//       <ContactSection />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import RotatingImage from "./Home/RotatingImage";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import Stats from "./Home/Stats";
import TrustedBy from "./Home/TrustedBy";
import Offers from "./Home/Offers";
import ContactSection from "./Home/ContactSection";
import Footer from "../common/Footer";

// Import images
import shieldImg from "../assets/shields.jpg";
import modelImg1 from "../assets/moedel1.jpg";
import modelImg2 from "../assets/3dmodel.jpg";

import "./Home/Home.css";

const Home = () => {
  const [zoomed, setZoomed] = useState(false);

  const images = [shieldImg, modelImg1, modelImg2];

  // Styles for main content and description text
  const mainContentStyle = {
    textAlign: "left", // Align text to the left
    padding: "40px",
    backgroundColor: "#203a43", // Dark blue/green background
    marginLeft: "-16px", // Shift content left
    marginTop: "-44px", // Shift content up
  };
  
  const descriptionTextStyle = {
    fontSize: "1.5rem", // Larger font size
    lineHeight: "1.8", // Proper spacing between lines
    color: "white", // White text color
    margin: "20px 0", // Spacing around the text
    maxWidth: "600px", // Limit width for better readability
    background: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for emphasis
    padding: "20px", // Padding around the content
    borderRadius: "10px", // Smooth rounded corners
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Soft shadow effect
  };
  
  

  const handleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <>
      <main className="main-content">
        {/* Header Section */}
        <header>
          <div style={mainContentStyle}>
            <p style={descriptionTextStyle}>
              Our platform offers a comprehensive suite of tools to enhance cybersecurity intelligence. Leverage advanced technologies to detect threats, analyze risks, and safeguard your digital assets.
            </p>
          </div>
        </header>

        {/* Flexbox Layout for Rotating Image and Capabilities Section */}
        <div className="content-wrapper">
          {/* Left: Capabilities Section */}
          <section className="capabilities-section">
            <h3>Capabilities</h3>
            <ul>
              <li>🔍 Real-time threat detection and analysis</li>
              <li>🤖 AI-powered malware and phishing prevention</li>
              <li>📰 Stay updated with the latest cybersecurity news</li>
              <li>🌐 Dark web monitoring for leaked credentials</li>
            </ul>
          </section>


          {/* Right: Rotating Image */}
         
          <div className={`image-container ${zoomed ? "zoomed" : ""}`} onClick={handleZoom}>
            <RotatingImage images={images} interval={3000} />
          </div>
          </div>
        
      </main>

      {/* Additional Sections */}
      <Services />
      <AboutUs />
      <TrustedBy />
      <Stats />
      <Offers />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
