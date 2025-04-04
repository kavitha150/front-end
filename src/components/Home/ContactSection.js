// import React from "react";
// import "./ContactSection.css";
// import {
//   faMapMarkerAlt,
//   faPhoneAlt,
//   faEnvelope,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";

// const ContactSection = () => {
//   return (
//     <div className="contact-section">
//       <div className="container">
//         {/* Contact Information */}
//         <div className="contact-info">
//           <h2 className="subheading">CONTACT US</h2>
//           <h1 className="heading">Contact Information</h1>
//           <p className="description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
//             mauris ac enim sagittis dignissim. Praesent egestas, urna quis auctor
//             iaculis, lacus tortor porta ligula.
//           </p>

//           <div className="info-items">
//             <div className="info-item">
//               <div className="icon">
//                 <i className="fas fa-map-marker-alt"></i>
//               </div>
//               <div>
//                 <h3 className="info-title">Our Location</h3>
//                 <p className="info-text">Sylhet 3100, Bangladesh</p>
//               </div>
//             </div>

//             <div className="info-item">
//               <div className="icon">
//                 <i className="fas fa-phone-alt"></i>
//               </div>
//               <div>
//                 <h3 className="info-title">Our Number</h3>
//                 <p className="info-text">+8801714457298</p>
//               </div>
//             </div>

//             <div className="info-item">
//               <div className="icon">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div>
//                 <h3 className="info-title">Our Mail</h3>
//                 <p className="info-text">hello@riaadarif.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="contact-form">
//           <form>
//             <div className="form-row">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="form-input"
//               />
//               <input
//                 type="text"
//                 placeholder="Your Phone Number"
//                 className="form-input"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Your Mail"
//               className="form-input"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="form-input"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="form-textarea"
//               rows="5"
//             ></textarea>
//             <button type="submit" className="form-button">
//               <i className="fas fa-paper-plane"></i> SEND MAIL
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;


import React from "react";
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-info">
          <h2 className="subheading">CONTACT US</h2>
         
          <p className="description">
          We’re here to help and answer any questions you may have. Feel free to reach out to us for inquiries, feedback, or support.
          
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h3 className="info-title">Our Location</h3>
                <p className="info-text">Sylhet 3100, Bangladesh</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div>
                <h3 className="info-title">Our Number</h3>
                <p className="info-text">+8801714457298</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h3 className="info-title">Our Mail</h3>
                <p className="info-text">hello@riaadarif.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="form-input"
              />
            </div>
            <input
              type="email"
              placeholder="Your Mail"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Subject"
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
              rows="5"
            ></textarea>
            <button type="submit" className="form-button">
              <FontAwesomeIcon icon={faPaperPlane} /> SEND MAIL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
