import React from "react";
import rectangleImage from "./images/profile.jpg";

const ProjectShowcase = ({ title, subtitle }) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center mr-8 flex-1">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-700">{subtitle}</p>
      </div>
      <img
        src={rectangleImage}
        alt="Rectangle"
        className="w-64 h-48 filter grayscale"
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
          />
          <ProjectShowcase
            title="Hein Group Online Ticketing System"
            subtitle="An app where passengers can book their trip online"
          />
          <ProjectShowcase
            title="Sein Kyaw Moe Gold and Jwellery"
            subtitle="A Point of Sale System for a gold shop"
          />
          <ProjectShowcase
            title="Hein Group Business"
            subtitle="An cash book app for a transportaion company"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
