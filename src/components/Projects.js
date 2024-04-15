import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: devlog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: uilogs,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: getInspirred,
      title: "get Inspirred",
      desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
      live: "https://get-inspirred.netlify.app/",
      code: "https://github.com/Coderamrin/get-inspired",
    },
  ];

  return (
    <section className="bg-gradient-to-tr to-[#6d28d9] via-[#000000] from-[#000000] text-white px-5 py-16" id="Projects">
      <div>
        <h2 className=" justify-center text-center  text-2xl lg:text-4xl font-bold mb-12 pb-2 hover:text-[#6d28d9]">
          Projects
        </h2>
      </div>

      <div className="projects container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2   xl:grid-cols-3 2xl:grid-cols-3 gap-8 w-4/5 m-auto">
        {projects.map((project, i) => {
          return (
            
            
          <div class="max-w-sm rounded-xl bg-stone-700 overflow-hidden border-2 border-gray-500  shadow-slate-400 mx-auto transform hover:skew-y-2 hover:scale-[1.03] delay-75 w-full" key={i}>
            <div>
              <img src={project.img} alt={project.title} className="transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 delay-200 rounded-xl p-1" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class=" text-slate-300 text-base">
                {project.desc}{project.desc}
              </p>
            </div>
            <div class="px-4 pt-2 pb-1 ml-2">
              
                <a
                  href="/#checkresume"
                  class="inline-block text-white bg-gradient-to-r from-[#6d28d9] via-[#7e22ce] to-[#a21caf] hover:from-[#a21caf] hover:to-[#6d28d9] rounded-xl px-4 py-2 text-sm font-semibold mr-2 mb-2 transition duration-300 ease-in-out"
                > 
                  Link Code  
                </a> 
              
                
                <a
                  href="/#checkresume"
                  class="inline-block text-white bg-gradient-to-r from-[#6d28d9] via-[#7e22ce] to-[#a21caf] hover:from-[#a21caf] hover:to-[#6d28d9] hover:px-5   rounded-xl px-4 py-2 text-sm font-semibold mr-2 mb-2"
                >
                  Link Project
                </a> 
             
             
            </div>

            
          </div>

          );
        })}
      </div>
    </section>
  );
};

export default Projects;
