// // // // import React from "react";
// // // // import { FaUserAlt } from "react-icons/fa";
// // // // import logo from "../assets/logo.jpg"; // Ensure this path is correct

// // // // const Hearder = () => {
// // // //   return (
// // // //     <div style={{ backgroundColor: "#1a202c"}}>
// // // //       <nav
// // // //         style={{
// // // //           background: "#203a43",
// // // //           padding: "16px",
// // // //           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// // // //         }}
// // // //       >
// // // //         <div
// // // //           style={{
// // // //             display: "flex",
// // // //             justifyContent: "space-between",
// // // //             alignItems: "center",
// // // //             maxWidth: "1200px",
// // // //             margin: "0 auto",
// // // //           }}
// // // //         >
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
// // // //             <div
// // // //               style={{
// // // //                 display: "inline-block",
// // // //                 borderRadius: "50%",
// // // //                 overflow: "hidden",
// // // //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // // //                 cursor: "pointer",
// // // //               }}
// // // //               onMouseEnter={(e) => {
// // // //                 e.currentTarget.style.transform = "scale(1.2)";
// // // //                 e.currentTarget.style.boxShadow = "0 0 20px 5px white";
// // // //               }}
// // // //               onMouseLeave={(e) => {
// // // //                 e.currentTarget.style.transform = "scale(1)";
// // // //                 e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
// // // //               }}
// // // //             >
// // // //               <img
// // // //                 src={logo || "https://via.placeholder.com/48"} // Fallback to placeholder
// // // //                 alt="Platform Logo"
// // // //                 style={{
// // // //                   width: "48px",
// // // //                   height: "48px",
// // // //                   objectFit: "cover",
// // // //                 }}
// // // //               />
// // // //             </div>
// // // //             <h1
// // // //               style={{
// // // //                 fontSize: "33px",
// // // //                 fontweight: "bold",
// // // //                 color: "white",
// // // //                marginleft: "350px",
// // // //               }}
// // // //             >
// // // //               Cyber Threat Intelligence
// // // //             </h1>
// // // //           </div>
// // // //           <button
// // // //             style={{
// // // //               display: "flex",
// // // //               alignItems: "center",
// // // //               gap: "8px",
// // // //               backgroundColor: "#319795",
// // // //               color: "#fff",
// // // //               padding: "8px 16px",
// // // //               borderRadius: "8px",
// // // //               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
// // // //               cursor: "pointer",
// // // //               transition: "background-color 0.3s ease",
// // // //               border: "none",
// // // //             }}
// // // //             onMouseOver={(e) =>
// // // //               (e.target.style.backgroundColor = "#2c7a7b")
// // // //             }
// // // //             onMouseOut={(e) =>
// // // //               (e.target.style.backgroundColor = "#319795")
// // // //             }
// // // //           >
// // // //             <FaUserAlt />
// // // //             {/* <span>Login</span> */}
// // // //           </button>
// // // //         </div>
// // // //       </nav>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hearder;



// // // import React from "react";
// // // import { FaUserAlt } from "react-icons/fa";
// // // import logo from "../assets/logo.jpg"; // Ensure this path is correct

// // // const Hearder = () => {
// // //   return (
// // //     <div style={{ backgroundColor: "#1a202c" }}>
// // //       <nav
// // //         style={{
// // //           background: "#203a43",
// // //           padding: "16px 24px",
// // //           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// // //         }}
// // //       >
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //             maxWidth: "1200px",
// // //             margin: "0 auto",
// // //           }}
// // //         >
// // //           {/* Logo and Title Section */}
// // //           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
// // //             <div
// // //               style={{
// // //                 display: "inline-block",
// // //                 width: "60px",
// // //                 height: "60px",
// // //                 borderRadius: "50%",
// // //                 overflow: "hidden",
// // //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // //                 cursor: "pointer",
// // //               }}
// // //               onMouseEnter={(e) => {
// // //                 e.currentTarget.style.transform = "scale(1.2)";
// // //                 e.currentTarget.style.boxShadow = "0 0 20px 5px white";
// // //               }}
// // //               onMouseLeave={(e) => {
// // //                 e.currentTarget.style.transform = "scale(1)";
// // //                 e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
// // //               }}
// // //             >
// // //               <img
// // //                 src={logo || "https://via.placeholder.com/60"} // Fallback to placeholder
// // //                 alt="Platform Logo"
// // //                 style={{
// // //                   width: "100%",
// // //                   height: "100%",
// // //                   objectFit: "cover",
// // //                   borderRadius: "50%", // Ensures circular shape
// // //                 }}
// // //               />
// // //             </div>
// // //             <h1
// // //               style={{
// // //                 fontSize: "28px",
// // //                 fontWeight: "bold",
// // //                 color: "#ffffff",
// // //                 marginleft:"331px",
// // //               }}
// // //             >
// // //               Cyber Threat Intelligence
// // //             </h1>
// // //           </div>

// // //           {/* Login Button */}
// // //           <button
// // //             style={{
// // //               display: "flex",
// // //               alignItems: "center",
// // //               gap: "8px",
// // //               backgroundColor: "white",
// // //               color: "black",
// // //               padding: "10px 20px",
// // //               borderRadius: "8px",
// // //               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
// // //               cursor: "pointer",
// // //               transition: "background-color 0.3s ease",
// // //               fontsize:"20px",
// // //               border: "none",
// // //             }}
// // //             onMouseOver={(e) =>
// // //               (e.target.style.backgroundColor = "#2c7a7b")
// // //             }
// // //             onMouseOut={(e) =>
// // //               (e.target.style.backgroundColor = "#38b2ac")
// // //             }
// // //           >
// // //             <FaUserAlt />
// // //             {/* <span>Login</span> */}
// // //           </button>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Hearder;


// // import React from "react";
// // import { FaUserAlt } from "react-icons/fa";
// // import logo from "../assets/logo.jpg"; // Ensure this path is correct

// // const Hearder = () => {
// //   return (
// //     <div style={{ backgroundColor: "#1a202c" }}>
// //       <nav
// //         style={{
// //           background: "#203a43",
// //           padding: "16px 24px",
// //           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// //         }}
// //       >
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             maxWidth: "1200px",
// //             margin: "0 auto",
// //           }}
// //         >
// //           {/* Logo and Title Section */}
// //           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 width: "60px",
// //                 height: "60px",
// //                 borderRadius: "50%",
// //                 overflow: "hidden",
// //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //                 cursor: "pointer",
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.transform = "scale(1.2)";
// //                 e.currentTarget.style.boxShadow = "0 0 30px 8px white";
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.transform = "scale(1)";
// //                 e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
// //               }}
// //             >
// //               <img
// //                 src={logo || "https://via.placeholder.com/60"} // Fallback to placeholder
// //                 alt="Platform Logo"
// //                 style={{
// //                   width: "100%",
// //                   height: "100%",
// //                   objectFit: "cover",
// //                   borderRadius: "50%", // Ensures circular shape
// //                 }}
// //               />
// //             </div>
// //             <h1
// //               style={{
// //                 fontSize: "28px",
// //                 fontWeight: "bold",
// //                 color: "#ffffff",
// //                 marginLeft: "345px", // Proper alignment
// //               }}
// //             >
// //               Cyber Threat Intelligence
// //             </h1>
// //           </div>

// //           {/* Login Button */}
// //           <button
// //             style={{
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "8px",
// //               backgroundColor: "white",
// //               color: "black",
// //               padding: "10px 20px",
// //               borderRadius: "8px",
// //               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
// //               cursor: "pointer",
// //               transition: "background-color 0.3s ease, box-shadow 0.3s ease",
// //               fontSize: "26px", // Adjusted font size
// //               border: "none",
// //             }}
// //             onMouseOver={(e) => {
// //               e.target.style.backgroundColor = "#2c7a7b";
// //               e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
// //             }}
// //             onMouseOut={(e) => {
// //               e.target.style.backgroundColor = "#319795";
// //               e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
// //             }}
// //           >
// //             <FaUserAlt />
// //           </button>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Hearder;


// import React from "react";
// import { FaUserAlt } from "react-icons/fa";
// import logo from "../assets/logo.jpg"; // Ensure this path is correct

// const Hearder = () => {
//   return (
//     <div style={{ backgroundColor: "#1a202c" }}>
//       <nav
//         style={{
//           background: "#203a43",
//           padding: "16px 24px",
//           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           {/* Logo and Title Section */}
//           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//             <div
//               style={{
//                 display: "inline-block",
//                 width: "60px",
//                 height: "60px",
//                 borderRadius: "50%",
//                 overflow: "hidden",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "scale(1.2)";
//                 e.currentTarget.style.boxShadow = "0 0 30px 8px white";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
//               }}
//             >
//               <img
//                 src={logo || "https://via.placeholder.com/60"} // Fallback to placeholder
//                 alt="Platform Logo"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "50%", // Ensures circular shape
//                 }}
//               />
//             </div>
//             <h1
//               style={{
//                 fontSize: "28px",
//                 fontWeight: "bold",
//                 color: "#ffffff",
//                 marginLeft: "345px", // Proper alignment
//               }}
//             >
//               Cyber Threat Intelligence
//             </h1>
//           </div>

//           {/* Login Button */}
//           <button
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               backgroundColor: "white",
//               color: "black",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease, box-shadow 0.3s ease",
//               fontSize: "26px", // Adjusted font size
//               border: "none",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#2c7a7b";
//               e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "#319795";
//               e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
//             }}
//           >
//             <FaUserAlt />
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Hearder;








import React from "react";
import { useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import logo from "../assets/logo.jpg"; // Ensure this path is correct

const Header = () => {
  const location = useLocation();

  // Only render the header if the current path is "/"
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div style={{ backgroundColor: "#1a202c" }}>
      <nav
        style={{
          background: "#203a43",
          padding: "16px 24px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Logo and Title Section */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "inline-block",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.boxShadow = "0 0 30px 8px white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={logo || "https://via.placeholder.com/60"} // Fallback to placeholder
                alt="Platform Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%", // Ensures circular shape
                }}
              />
            </div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ffffff",
                marginLeft: "345px", // Proper alignment
              }}
            >
              Cyber Threat Intelligence
            </h1>
          </div>

          {/* Login Button
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              fontSize: "26px", // Adjusted font size
              border: "none",
            }} */}
            {/* onMouseOver={(e) => {
              e.target.style.backgroundColor = "#2c7a7b";
              e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#319795";
              e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
            }}
          
            <FaUserAlt />
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
