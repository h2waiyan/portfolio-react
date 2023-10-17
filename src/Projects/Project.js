import React from "react";
import transport from "../images/heingp-transportation.png";
import hein from "../images/hein.jpg";
import coc from "../images/coc.jpg";
import gold from "../images/gold.jpg";

const ProjectShowcase = ({ title, subtitle, imgsrc }) => {
  return (
    <div className="flex items-start flex-col sm:flex-row my-3">
      <div className="flex flex-col justify-center mr-8 flex-1">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-gray-700 mb-2">
          {subtitle}
        </p>
      </div>
      <img
        src={imgsrc}
        alt="project-img"
        className="w-full sm:w-60 h-40 object-cover filter grayscale sm:ml-8"
      />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-300 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Projects
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg">
          <ProjectShowcase
            title="Class on Cloud"
            subtitle="An online communication platform for students, teachers and parents"
            imgsrc={coc}
          />
          <ProjectShowcase
            title="Hein Group Online Ticketing System"
            subtitle="An app where passengers can book their trip online"
            imgsrc={transport}
          />
          <ProjectShowcase
            title="Sein Kyaw Moe Gold and Jwellery"
            subtitle="A Point of Sale System for a gold shop"
            imgsrc={gold}
          />
          <ProjectShowcase
            title="Hein Group Business"
            subtitle="A cash book app for a transportaion company"
            imgsrc={hein}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
