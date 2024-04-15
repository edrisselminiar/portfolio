import React  from 'react';
import HeroVideo from "../assets/HeroVideo.mp4";


const About = () => {
  return (
    <section className=" bg-black px-5 text-white py-12 lg:py-18 xl:py-32 " id="About">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        
        <div className="hero-info pb-5 md:pb-0 ">
          <h1 className="text-2xl lg:text-4xl">
            Hi, <br />I am <span className="text-accent"> Driss ELMINIAR</span><br />
            Developer Web Full Stack
          </h1>

          <p className="py-5">
            I create websites that help organizations address business challenges and meet their needs .
            My expertise lies within front-end - back-end web apps , and the main languages in my tech stack are JavaScript, React, and laravel , mongodb ..
          </p>

          <div className="mt-6">
              <a
                href="/#checkresume"
                class="bg-gradient-to-r from-[#6d28d9] via-[#7e22ce] to-[#a21caf] hover:from-[#a21caf] text-white font-bold py-3 px-12 rounded-2xl"
              >
                check resume
              </a> 
          </div>
          
        </div>

        <div className="hero-img">

          <video src={HeroVideo}
            autoPlay
            loop 
            muted 
            width="640"
            height="360"  
          />
        
        </div>

      </div>
    </section>
  );
};

export default About;
