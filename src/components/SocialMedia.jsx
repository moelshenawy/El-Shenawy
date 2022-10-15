import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/Muhammad-ElShenawy"
      alt="facebook_profile"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://twitter.com/mohamedgk5"
      alt="twitter_profile"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>

    <a
      href="https://www.instagram.com/muhammad_ali_elshenawy/"
      alt="instagram_profile"
      target="_blank"
      rel="noreferrer"
    >
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
