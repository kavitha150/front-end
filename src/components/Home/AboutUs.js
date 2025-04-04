import React from "react";

// Ensure this path matches your folder structure
import aboutUsImage from "../../assets/aboutus.jpg";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Left Side: Image and Overlay */}
        <div className="about-us-image">
          <img
            src={aboutUsImage} // Use the imported variable here
            alt="Experience Illustration"
            className="about-us-img"
          />
         </div>

        {/* Right Side: Text Content */}
        <div className="about-us-text">
          <h4>ABOUT US</h4>
          <h2>The Perfect Solution For All The Protection Question</h2>
          <p>
          We offer a comprehensive range of solutions to address all your protection and security concerns. Our team is dedicated to delivering reliable and innovative services tailored to your needs.

With years of expertise, we strive to ensure safety, efficiency, and peace of mind in every aspect. Trust us to provide solutions that safeguard what matters most.
          </p>
          <blockquote>
          “Your security is our priority. We are committed to creating a secure environment for you to thrive.”


          </blockquote>
          <button className="read-more-btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
