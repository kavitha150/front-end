// import React from "react";
// import Hearder from "./common/Hearder";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// import ThreatScanner from "./ThreatScanner/ThreatScanner";
// import Dashboard from "./Dashboard/Dashboard";
// import NewsFeed from "./News/NewsFeed";
// import Home from "./components/Home"; 
// // Import Home component
// import RotatingImage from "./components/Home/RotatingImage";
// import Footer from "./common/Footer";


// // Import CSS files

// import "./components/Home/Services.css";
// import "./components/Home/AboutUs.css";
// import "./components/Home/TrustedBy.css";
// import "./components/Home/Offers.css";
// import "./components/Home/Stats.css";
// import "./components/Home/ContactSection.css";
// import "./components/Home/Home.css"; // Import main Home.css

// import Image1 from "./assets/shields.jpg";
// import Image2 from "./assets/3dmodel.jpg";
// import Image3 from "./assets/moedel1.jpg";


// const App = () => {
//   const images = [Image1, Image2, Image3];
//   const location = useLocation();
//   return (
//     <>
//       {/* Render the Header only on the home page */}
//       {location.pathname === "/" && <Hearder/>}
//     <Router>
//       <Hearder/>
      

// <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
//       {/* Navigation Bar */}
//       <header
//         style={{
//           padding: "20px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "16px",
//           background: "transparent", // No background
//           border: "none", // Remove any border
//           boxShadow: "none", // Remove any shadow
//         }}
//       >
//         <nav style={{ display: "flex", gap: "20px" }}>
//           {/* Button-style Links */}
//           <Link
//             to="/"
//             style={{
//               padding: "10px 20px",
//               borderRadius: "8px",
//               textDecoration: "none",
//               color: "#fff",
//               backgroundColor: "#319795",
//               fontWeight: "bold",
//               transition: "all 0.3s ease",
//               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#2c7a7b";
//               e.target.style.transform = "scale(1.1)";
//               e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "#319795";
//               e.target.style.transform = "scale(1)";
//               e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             Home
//           </Link>
//           <Link
//             to="/scanner"
//             style={{
//               padding: "10px 20px",
//               borderRadius: "8px",
//               textDecoration: "none",
//               color: "#fff",
//               backgroundColor: "#319795",
//               fontWeight: "bold",
//               transition: "all 0.3s ease",
//               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#2c7a7b";
//               e.target.style.transform = "scale(1.1)";
//               e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "#319795";
//               e.target.style.transform = "scale(1)";
//               e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             Threat Scanner
//           </Link>
//           <Link
//             to="/dashboard"
//             style={{
//               padding: "10px 20px",
//               borderRadius: "8px",
//               textDecoration: "none",
//               color: "#fff",
//               backgroundColor: "#319795",
//               fontWeight: "bold",
//               transition: "all 0.3s ease",
//               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#2c7a7b";
//               e.target.style.transform = "scale(1.1)";
//               e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "#319795";
//               e.target.style.transform = "scale(1)";
//               e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/news"
//             style={{
//               padding: "10px 20px",
//               borderRadius: "8px",
//               textDecoration: "none",
//               color: "#fff",
//               backgroundColor: "#319795",
//               fontWeight: "bold",
//               transition: "all 0.3s ease",
//               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#2c7a7b";
//               e.target.style.transform = "scale(1.1)";
//               e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "#319795";
//               e.target.style.transform = "scale(1)";
//               e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             News
//           </Link>
//         </nav>
//       </header>




        

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: "20px",  }}>
//           <Routes>
//             {/* Routes for Each Page */}
//             <Route path="/" element={<Home />} />
//             <Route path="/scanner" element={<ThreatScanner />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/news" element={<NewsFeed />} />
//           </Routes>
//         </div>

        
       
//       </div>
//     </Router>
//     </>
//   );
// };

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Hearder from "./common/Hearder"; // Corrected typo
import ThreatScanner from "./ThreatScanner/ThreatScanner";
import Dashboard from "./Dashboard/Dashboard";
import NewsFeed from "./News/NewsFeed";
import Home from "./components/Home";
import LoginSignup from "./components/LoginSignup";
import Footer from "./common/Footer";

// Import CSS files
import "./components/Home/Services.css";
import "./components/Home/AboutUs.css";
import "./components/Home/TrustedBy.css";
import "./components/Home/Offers.css";
import "./components/Home/Stats.css";
import "./components/Home/ContactSection.css";
import "./components/LoginSignup.css";
  
    


import "./components/Home/Home.css"; // Import main Home.css

import Image1 from "./assets/shields.jpg";
import Image2 from "./assets/3dmodel.jpg";
import Image3 from "./assets/moedel1.jpg";

const App = () => {
  const images = [Image1, Image2, Image3];
  
  return (
    <Router>
      <MainContent images={images} />
    </Router>
  );
};

const MainContent = ({ images }) => {
  const location = useLocation();

  return (
    <>
      {/* Render Header only on the home page */}
      {location.pathname === "/" && <Hearder />}

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Navigation Bar */}
        <header
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <nav style={{ display: "flex", gap: "20px" }}>
            {["Home", "Threat Scanner", "Dashboard", "News"].map((item, index) => {
              const paths = ["/", "/scanner", "/dashboard", "/news"];
              return (
                <Link
                  key={index}
                  to={paths[index]}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#319795",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#2c7a7b";
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#319795";
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </header>
        <LoginSignup/>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home images={images} />} />
            <Route path="/scanner" element={<ThreatScanner />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<NewsFeed />} />
          </Routes>
        </div>

        
      </div>
    </>
  );
};

export default App;
