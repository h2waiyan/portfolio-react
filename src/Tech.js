import React from "react";
import html from "./images/Tech Logo SVG/html-1.svg";
import css from "./images/Tech Logo SVG/css-3.svg";
import js from "./images/Tech Logo SVG/javascript-svgrepo-com.svg";
import ts from "./images/Tech Logo SVG/typescript-icon-svgrepo-com.svg";
import bootstrap from "./images/Tech Logo SVG/bootstrap-svgrepo-com.svg";
import tailwind from "./images/Tech Logo SVG/tailwind-svgrepo-com.svg";
import angular from "./images/Tech Logo SVG/angular-svgrepo-com.svg";
import react from "./images/Tech Logo SVG/react-svgrepo-com.svg";
import dart from "./images/Tech Logo SVG/dart-svgrepo-com.svg";
import flutter from "./images/Tech Logo SVG/flutter-svgrepo-com.svg";
import nodejs from "./images/Tech Logo SVG/nodejs-icon-svgrepo-com.svg";
import mysql from "./images/Tech Logo SVG/brand-mysql-svgrepo-com.svg";
import postgresql from "./images/Tech Logo SVG/postgresql-svgrepo-com.svg";
import mongodb from "./images/Tech Logo SVG/mongo-svgrepo-com.svg";
import git from "./images/Tech Logo SVG/git-svgrepo-com.svg";
import github from "./images/Tech Logo SVG/github-svgrepo-com.svg";
import "./Tech.css";

const TechImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 py-2 filter grayscale hover:grayscale-0"
    />
  );
};

const Tech = () => {
  return (
    <div className="bg-gray-100 p-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Tech Stack
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="flex gap-3 overflow-x-scroll hidescroll">
          <TechImage src={html} alt="HTML" />
          <TechImage src={css} alt="CSS" />
          <TechImage src={js} alt="JavaScript" />
          <TechImage src={ts} alt="TypeScript" />
          <TechImage src={bootstrap} alt="Bootstrap" />
          <TechImage src={tailwind} alt="Tailwind CSS" />
          <TechImage src={angular} alt="HTML" />
          <TechImage src={react} alt="CSS" />
          <TechImage src={nodejs} alt="JavaScript" />
          <TechImage src={dart} alt="Bootstrap" />
          <TechImage src={flutter} alt="Tailwind CSS" />
          <TechImage src={mysql} alt="Bootstrap" />
          <TechImage src={postgresql} alt="Tailwind CSS" />
          <TechImage src={mongodb} alt="Tailwind CSS" />
          <TechImage src={git} alt="Tailwind CSS" />
          <TechImage src={github} alt="Tailwind CSS" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
