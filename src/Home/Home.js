import React from "react";
import backgroundImage from "../images/bg-bw.jpeg";
import "./Home.css";
import Projects from "../Projects/Project";
import Tech from "../Tech/Tech";
import Footer from "../Footer/Footer";
import CV from "../htoowaiyan-cv.pdf";

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        opacity: "0.9",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-20">
        <h1 className="name text-4xl sm:text-6xl md:text-8xl  text-amber sm:font-bold mb-4 text-center transition-all duration-500">
          HTOO WAI YAN
        </h1>
        <h3 className="job text-3xl sm:text-5xl md:text-7xl text-amber sm:font-bold mb-8 text-center transition-all duration-500">
          a software engineer
        </h3>

        <div className="absolute top-0 right-0 mt-4 mr-4">
          <a
            href={CV}
            download
            className="download text-xl text-black hover:underline py-2"
          >
            Download CV
          </a>
        </div>

        <div className="absolute top-0 left-0 mt-4 ml-4 flex">
          <a
            href="https://www.linkedin.com/in/htoo-wai-yan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="text-xl text-black font-bold mr-2 hover:underline"
              style={{ textShadow: "1px white" }}
            >
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/h2waiyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="text-xl text-black font-bold mr-2 hover:underline"
              style={{ textShadow: "0 0 2px white" }}
            >
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const App = () => {
  return (
    <div>
      <Home />
      <Tech />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
