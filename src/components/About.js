import React ,{ useEffect } from 'react';
import HeroVideo from "../assets/HeroVideo.mp4";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';





const About = () => {

    const handleDownload = (event) => {
      event.preventDefault();
      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/DRISS-ELMINIAR.pdf`; // Correct path to your PDF file
      link.setAttribute('download', 'filename.pdf'); // Set the download attribute with a filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    

    useEffect(() => {
      AOS.init();
    }, []);
    


  return (
    <section className=" bg-black px-5 text-white py-20 lg:py-18 xl:py-32 " id="About">
      <div className="container mx-auto grid md:grid-cols-2 justify-center items-center" >
        
        <div className="hero-info pb-5 md:pb-0 p-9 pl-9 md:p-4 md:pl-6 lg:p-6 lg:pl-10 xl:p-12 xl:pl-16 2xl:p-14 2xl:pl-20 " data-aos="zoom-in-right" data-aos-duration="1000">
          <h1 className="text-2xl lg:text-4xl ">
            Hi, <br />I am <span className="text-accent"> Driss ELMINIAR</span><br />
            <div className=' flex'>
              Developer Web  
              <div className=' ml-3'>
                <Typewriter
                  options={{
                    autoStart: true ,
                    loop: true,
                    delay: 50,
                    strings: [" Full Stack"]
                  }}
                  />
              </div>

              
              
             
            </div>
          </h1>

          <p className="py-5">
            I create websites that help organizations address business challenges and meet their needs .
            My expertise lies within front-end - back-end web apps , and the main languages in my tech stack are JavaScript, React, and laravel , mongodb ..
          </p>

          <div className="mt-6">
              <button
                onClick={(event) => handleDownload(event)}
                class="bg-gradient-to-r from-[#6d28d9] via-[#7e22ce] to-[#a21caf] hover:from-[#a21caf] text-white font-bold py-3 px-12 rounded-2xl"
              >
                check resume
              </button> 
             
          </div>
          
        </div>

        <div className="hero-img" data-aos="zoom-in-left" data-aos-duration="1000">

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



