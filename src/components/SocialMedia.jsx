import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/moelshenawy"
      alt="facebook_profile"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/mo-elshenawy/"
      alt="linkedin_profile"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>

    <a
      href="https://www.instagram.com/moelshenawyy/"
      alt="instagram_profile"
      target="_blank"
      rel="noreferrer"
    >
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
