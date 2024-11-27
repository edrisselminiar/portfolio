import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
// import getInspirred from "../assets/get-inspirred.png";
// import uilogs from "../assets/uilogs.png";
import ecommeProject from "../assets/ecommeProject.png";
import books from "../assets/books.png";
import portfolio from "../assets/portfolio.png";
import todolist from "../assets/todolist.png";
import dentist from "../assets/dentist.png";

const Projects = () => {
  const projects = [
    {
      img: ecommeProject,
      title: "ecommerce Project",
      desc: "e-commerce website for selling natural and cosmetic oils, Created with Javascript and HTML CSS",
      live: "",
      code: "https://github.com/edrisselminiar/Bio_et_Bien_-tre",
    },
    {
      img: books,
      title: "The Books",
      desc: "site dedicated to books that enables users to download and read books within the site, Integrated frontend and backend website, Created with Laravel and TailwindCSS ..",
      live: "https://openbook.42web.io/?i=1",
      code: "https://github.com/edrisselminiar/BOOKS",
    },
    {
      img: portfolio,
      title: "portfolio",
      desc: "my portfolio website, Created with ReactJS and TailwindCSS ..",
      live: "",
      code: "https://github.com/edrisselminiar/portfolio",
    },
    {
      img: todolist,
      title: "todo list",
      desc: "to-do list is a simple and effective tool for organizing tasks and managing your daily responsibilities, Created with ReactJS and Bootstrap ..",
      live: "https://todolist-driss-elminiar.netlify.app/",
      code: "https://github.com/edrisselminiar/react-todo-list-app",
    },
    {
      img: dentist,
      title: "Appointment management",
      desc: "Dentist website for managing medical appointments, Created with Laravel and Bootstrap ..",
      live: "",
      code: "https://github.com/edrisselminiar/Appointment.management",
    },
  ];

  return (
    <section className="bg-gradient-to-tr to-[#6d28d9] via-[#000000] from-[#000000] text-white px-5 py-16" id="Projects">
      <div>
        <h2 className=" justify-center text-center  text-2xl lg:text-4xl font-bold mb-12 pb-2 hover:text-[#6d28d9]">
          Projects
        </h2>
      </div>

      <div className="projects container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2   xl:grid-cols-3 2xl:grid-cols-3 gap-8 w-4/5 m-auto" data-aos="zoom-in" data-aos-duration="1000" >
        {projects.map((project, i) => {
          return (
            
            
          <div class="max-w-sm rounded-xl bg-stone-700 overflow-hidden border-2 border-gray-500  shadow-slate-400 mx-auto transform hover:skew-y-2 hover:scale-[1.03] delay-75 w-full" key={i}>
            <div>
              <img src={project.img} alt={project.title} className="transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 delay-200 rounded-xl p-1 h-60" />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{project.title}</div>
              <p class=" text-slate-300 text-base">
                {project.desc}
              </p>
            </div>
            <div class="px-4 pt-2 pb-1 ml-2">
              
                <a
                  href={project.code} target="_blank"
                  class="inline-block text-white bg-gradient-to-r from-[#6d28d9] via-[#7e22ce] to-[#a21caf] hover:from-[#a21caf] hover:to-[#6d28d9] rounded-xl px-4 py-2 text-sm font-semibold mr-2 mb-2 transition duration-300 ease-in-out"
                > 
                  Link Code  
                </a> 
              
                
                <a
                  href={project.live} target="_blank"
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
