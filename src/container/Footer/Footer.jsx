import React, { useRef, useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import emailjs from "emailjs-com";

const Footer = () => {
  const refForm = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateId = "template_jwa4vhu";
    const serviceId = "service_i6zkjie";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, "NldNEM5KN0n3mDinD")
      .then(
        () => {
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
  };
  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.whatsapp} alt="Whats App" loading="lazy" />
          <a
            href="https://en.wh.ms/201100791315"
            target="_blank"
            className="p-text"
            rel="noreferrer"
          >
            Chat Via Whats App
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" loading="lazy" />
          <a href="tel:+(20)1100791315" className="p-text">
            +(20) 1100791315
          </a>
        </div>

        <div className="app__footer-card ">
          <img src={images.email} alt="email" loading="lazy" />
          <a href="mailto:mohameduc8526@gmail.com" className="p-text">
            mohameduc8526@gmail.com
          </a>
        </div>
      </div>
      <img className="qr-code" src={images.qrCode} alt="QR-Code" />
      {!isFormSubmitted ? (
        <form
          ref={refForm}
          onSubmit={sendEmail}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Example@gmail.com"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>

          <button type="submit" className="p-text" value="Send message!">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h2 className="head-text">
            Message successfully sent{" "}
            <span>Thank you for getting in touch! </span>
          </h2>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
