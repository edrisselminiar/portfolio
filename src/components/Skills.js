import React from "react";
import reactlogo from "../assets/react.png";
import csslogo from "../assets/css.jpg";
import htmllogo from "../assets/html.jpg";
import bootstraologo from "../assets/bootstrap.png";
import tailwindcsslogo from "../assets/tailwindCSS.webp";
import javascriptlogo from "../assets/javascript.jpg";
import reduxlogo from "../assets/redux.png";
import laravellogo from "../assets/Laravel.png";
import phplogo from "../assets/php.png";
import expresslogo from "../assets/express JS.jpg";
import mysqllogo from "../assets/mysql.jpg";
import sqllogo from "../assets/sql.jpg";
import mongodblogo from "../assets/mongodb.png";
import gitlogo from "../assets/git.jpg";
import githublogo from "../assets/github.jpg";
import vscodelogo from "../assets/VScode.jpg";
import Postmanlogo from "../assets/postman.jpg";
import figmalogo from "../assets/figma.jpg";

const Skills = () => {
  return (
    <section className=" bg-gradient-to-bl from-[#000000] via-[#000000] to-[#6d28d9] text-white px-1 lg:px-12 xl:px-12 py-4 lg:py-12 xl:py-32" id="Skills">
        <div className="about-info">
          <div>
            <h2 className=" justify-center text-center  text-2xl lg:text-4xl font-bold mb-12 pb-2 hover:text-[#6d28d9] ">
              Skills 
            </h2>
          </div>


          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center justify-center 2xl:grid-cols-2 xl:grid-cols-2 w-4/5 m-auto ">
            
            <div class=" border  border-[#6d28d9] rounded-lg m-4 p-2 transform hover:skew-y-3 delay-150 ">

              <h3 className="m-3">Frontend</h3>

              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={reactlogo} /> ReactJS
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={htmllogo} /> HTML
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={csslogo} /> CSS
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={tailwindcsslogo} /> TailwindCSS
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={javascriptlogo} /> JavaScript
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={bootstraologo} /> Bootstrap 
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={reduxlogo} ></img> Redux
                </div>
              </button>


             
            </div>



            <div class=" border  border-[#6d28d9] rounded-lg p-2 m-4  transform hover:skew-y-3 delay-150  ">

              <h3 className="m-3">Backend</h3>

              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={laravellogo} /> Laravel
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={phplogo} /> PHP
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={expresslogo} /> Express JS
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={mysqllogo} /> MySQL
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={sqllogo} /> SQL
                </div>
              </button>
              <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                <div className=" flex mx-4">
                    <img style={{ width: '20px'}} className=" mr-2" src={mongodblogo} /> Mongodb 
                </div>
              </button>


             
            </div>

            <div class=" border  border-[#6d28d9] rounded-lg  p-2 m-4 transform hover:skew-y-3 delay-150	  ">

                <h3 className="m-3">Others</h3>

                <button className="transform hover:skew-y-3 delay-75	  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                  <div className=" flex mx-4">
                      <img style={{ width: '20px'}} className=" mr-2" src={gitlogo} /> Git
                  </div>
                </button>
                <button className="transform hover:skew-y-3 delay-75 border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                  <div className=" flex mx-4">
                      <img style={{ width: '20px'}} className=" mr-2" src={githublogo} /> Github
                  </div>
                </button>
                <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                  <div className=" flex mx-4">
                      <img style={{ width: '20px'}} className=" mr-2" src={vscodelogo} /> VS Code 
                  </div>
                </button>
                <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                  <div className=" flex mx-4">
                      <img style={{ width: '20px'}} className=" mr-2" src={Postmanlogo} /> Postman
                  </div>
                </button>
                <button className=" transform hover:skew-y-3 delay-75  border border-slate-500 hover:border-[#6d28d9] rounded-lg outline-1  text-sm m-2 p-2">
                  <div className=" flex mx-4">
                      <img style={{ width: '20px'}} className=" mr-2" src={figmalogo} /> Figma
                  </div>
                </button>

            </div>

          </div>


        </div>

      
    </section>
  );
};

export default Skills;
