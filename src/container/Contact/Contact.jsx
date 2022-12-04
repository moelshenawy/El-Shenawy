import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";
import emailjs from "emailjs-com";
import useAnalyticsEventTracker from "./../../useAnalyticsEventTracker";
import ReactGA from "react-ga";

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker("Contact us");

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
          setIsFormSubmitted(true);
          setLoading(false);
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>

      <div className="app__footer-cards">
        <a
          href="https://en.wh.ms/201100791315"
          className="app__footer-card "
          target="_blank"
          rel="noreferrer"
        >
          <img src={images.whatsapp} alt="Whats App" loading="eager" />
          <a
            href="https://en.wh.ms/201100791315"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            Chat Via Whats App
          </a>
        </a>

        <a
          href="tel:+(20)1100791315"
          target="_blank"
          rel="noreferrer"
          className="app__footer-card"
          onClick={() => gaEventTracker("call")}
        >
          <img src={images.mobile} alt="phone" loading="eager" />
          <a href="tel:+(20)1100791315" className="p-text">
            +(20) 1100791315
          </a>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:moelshenawy5@gmail.com"
          className="app__footer-card "
          onClick={() => gaEventTracker("email")}
        >
          <img src={images.email} alt="email" loading="eager" />
          <a
            href="mailto:moelshenawy5@gmail.com  "
            className="p-text"
            onClick={() => gaEventTracker("email")}
          >
            moelshenawy5@gmail.com
          </a>
        </a>
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
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
