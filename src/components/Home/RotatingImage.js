// // import React, { useState, useEffect } from "react";

// // const RotatingImage = ({ images, interval, imageSize }) => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   useEffect(() => {
// //     const imageInterval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, interval);

// //     return () => clearInterval(imageInterval);
// //   }, [images.length, interval]);

 
  

// //   return (
// //     <div className="relative mx-auto overflow-hidden rounded-lg shadow-lg"
// //          style={{ width: "600px", height: "400px" }} // Adjust width and height here
// //     >
// //       <img
// //         src={images[currentIndex]}
// //         alt={`Slide ${currentIndex + 1}`}
// //         className="transition-opacity duration-1000"
// //         style={{
// //           width: "100%",  // Ensures it takes full width of the parent div
// //           height: "100%", // Ensures it takes full height of the parent div
// //           objectFit: "cover", // Prevents image distortion, fills space properly
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default RotatingImage;
// // import React, { useState, useEffect } from "react";

// // const RotatingImage = ({ images, interval, imageSize }) => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   useEffect(() => {
// //     const imageInterval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, interval);

// //     return () => clearInterval(imageInterval);
// //   }, [images.length, interval]);

// //   return (
// //     <div
// //       className="relative mx-auto overflow-hidden rounded-lg shadow-lg"
// //       style={{
// //         width: imageSize?.width || "550px", // Default width: 600px
// //         height: imageSize?.height || "399px", // Default height: 400px
// //       }}
// //     >
// //       <img
// //         src={images[currentImageIndex]} // Fixed the bug here
// //         alt={`Slide ${currentImageIndex + 1}`} // Fixed the bug here
// //         className="transition-opacity duration-1000"
// //         style={{
// //           width: "100%", // Ensures it takes full width of the parent div
// //           height: "100%", // Ensures it takes full height of the parent div
// //           objectFit: "cover", 
// //           // Custom positioning
// //           marginLeft: "862px",
// //           transition: "opacity 0.5s ease-in-out",
// //           borderRadius: "12px",
// //           boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
// //           marginBottom:"31px",
// //         }}
// //         onMouseOver={(e) => {
// //           e.target.style.transform = "scale(1.05)";
// //           e.target.style.filter = "brightness(1.1)";
// //         }}
// //         onMouseOut={(e) => {
// //           e.target.style.transform = "scale(1)";
// //           e.target.style.filter = "brightness(1)";
// //         }}

// //         />
// //         </div>
// //   );
// // };


// // export default RotatingImage;


// // 


// import React, { useState, useEffect } from "react";

// const RotatingImage = ({ images, interval, imageSize }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(imageInterval);
//   }, [images.length, interval]);

//   return (
//     <>
//     {/* Embedded CSS */}
//     <style>
//       {`
//         .image-container {
//           position: relative;
//           margin: auto;
//           overflow: hidden;
//           border-radius: 12px;
//           box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
//         }

//         .custom-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
//           border-radius: 12px;
//           margin-top: 40px; /* Adjust this value to control the top margin */
//         }

//         .custom-image:hover {
//           transform: scale(1.05);
//           filter: brightness(1.1);
//         }
//       `}
//     </style>
//     <div
//       className="image-container"
//       style={{
//         width: imageSize?.width || "550px", // Default width: 550px
//         height: imageSize?.height || "900px", // Default height: 399px
//       }}
//     >
//       <img
//         src={images[currentImageIndex]}
//         alt={`Slide ${currentImageIndex + 1}`}
//         className="custom-image"
//       />
//     </div>
//     </>
//   );
// };

// export default RotatingImage;


// import React, { useState, useEffect } from "react";

// const RotatingImage = ({ images, interval }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(imageInterval);
//   }, [images.length, interval]);

//   return (
//     <>
//       {/* Embedded CSS */}
//       <style>
//         {`
//           .image-container {
//             position: relative;
//             margin: auto;
//             overflow: hidden;
//             border-radius: 12px;
//             box-shadow: none; /* No shadow */
//             background: transparent; /* Transparent background */
//           }

//           .custom-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
//             border-radius: 12px;
//           }

//           .custom-image:hover {
//             transform: scale(1.05);
//             filter: brightness(1.1);
//           }
//         `}
//       </style>
//       <div
//         className="image-container"
//         style={{
//           width: "600px", // Adjust width as needed
//           height: "400px", // Adjust height as needed
//           margin: "0 auto", // Center horizontally
//         }}
//       >
//         <img
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className="custom-image"
//         />
//       </div>
//     </>
//   );
// };

// export default RotatingImage;


import React, { useState, useEffect } from "react";

const RotatingImage = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images.length, interval]);

  return (
    <>
      {/* Embedded CSS */}
      <style>
        {`
          .image-container {
            position: relative;
            margin: auto;
            overflow: hidden;
            border-radius: 12px;
            margin-top:-143px;
          }

          .custom-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
            border-radius: 12px;
          }

          .custom-image:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
        `}
      </style>
      <div
        className="image-container"
        style={{
          width: "600px", // Adjust width as needed
          height: "400px", // Adjust height as needed
          margin: "0 auto", // Center horizontally
          marginTop: "80px", // Increased top margin
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="custom-image"
        />
      </div>
    </>
  );
};

export default RotatingImage;
