










import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color:#1e1e1e; /* Dark background */
            color: white; /* White text color */
            text-align: center; /* Center-align text */
            padding: 20px 0; /* Add padding for better spacing */
            margin-left: -29px; /* Negative margin-left */
            margin-right: -29px; /* Negative margin-right */
            border-top-left-radius: 15px; /* Smoother rounded corners */
            border-top-right-radius: 15px;
            margin-top: 20px;
            margin-bottom: -42px;
            font-family: Arial, sans-serif; /* Use a clean font */
          }
          
          .footer-text {
            margin: 0; /* Remove default margin */
            font-size: 20px; /* Slightly adjust font size */
            font-weight: bold; /* Make the text bold for better visibility */
            letter-spacing: 0.5px; 
            /* Add slight letter spacing */
            color:white;
          }
        `}
      </style>
      <footer className="footer">
        <p className="footer-text">Copyright 2025 © All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
