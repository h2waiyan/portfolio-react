import React from "react";
import linkedin from "./images/Tech Logo SVG/linkedin.png";
import github from "./images/Tech Logo SVG/github.png";
import twitter from "./images/Tech Logo SVG/twitter.png";

const FooterLink = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className="w-6 h-6 mx-2" />
    </a>
  );
};

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque, nisl vel tincidunt dignissim, elit elit bibendum sapien,
        vel lacinia lorem quam vel velit.
      </p>
      <div className=" flex">
        <FooterLink
          href="https://www.linkedin.com/"
          src={linkedin}
          alt="LinkedIn"
        />
        <FooterLink
          href="https://www.instagram.com/"
          src={github}
          alt="Github"
        />
        <FooterLink href="https://twitter.com/" src={twitter} alt="Twitter" />
      </div>
    </div>
  );
};

export default About;
