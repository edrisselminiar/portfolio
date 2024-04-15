import React, { useRef , useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  


  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_dh2theq';
    const templateId = 'template_c9zibel';
    const publicKey = 'UwxmCPgn-kcs4Eh6M';

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });



  }


  return (
    <div class="bg-gradient-to-bl to-[#6d28d9] via-[#000000] from-[#000000] relative items-top justify-center px-5 py-16  sm:items-center " id="Contact">
   

          <div>
            <h2 className=" text-white  justify-center text-center  text-2xl lg:text-4xl font-bold mb-12 pb-2 hover:text-[#6d28d9]">
              Contact
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 w-4/5 m-auto ">

              <div class="p-6 mr-2 bg-gray-800 rounded-lg border-2 border-gray-500 text-slate-300 text-base text-center  ">
                  <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                      My Contact 
                  </h1>
                  
                  <div class="flex items-center  mt-16 ">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-10 h-10 text-[#6d28d9] ">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <a href="https://www.google.com/maps/search/morocco,+safi" target="_blank" class="ml-4 text-md tracking-wide text-slate-300  font-semibold">
                          Morocco, Safi, 46000
                      </a>
                  </div>

                  <div class="flex items-center mt-4 ">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-10 h-10 text-[#6d28d9]">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <a href="tel:+212644223726" target="_blank" class="ml-4 text-md tracking-wide font-semibold  text-slate-300">
                          +212 644223726
                      </a>
                  </div>

                  <div class="flex items-center mt-4 mb-2">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-10 h-10 text-[#6d28d9]">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <a target="_blank"  href="mailto:edriss.elminiar01@gmail.com" class="ml-4 text-sm md:text-md 2xl:text-md xl:text-md lg:text-md tracking-wide font-semibold  text-slate-300 ">
                            edriss.elminiar01@gmail.com
                      </a>
                  </div>
                  
              </div>


              <div>
                <form class="md:p-6 lg:p-6 xl:p-6 2xl:p-6  p-0 pt-6 flex flex-col justify-center" onSubmit={handleSubmit}  > 
                    <h2 className=" text-[#6d28d9] my-2 mx-2 text-2xl font-bold ">Email Me</h2>
                    <div class="flex flex-col">
                        <label for="name" class="hidden">Name</label>
                        <input  value={name} onChange={(e) => setName(e.target.value)}  type="text"  id="name" placeholder="Name" required class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-2 border-gray-500 text-slate-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>

                    <div class="flex flex-col mt-2  ">
                        <label for="email" class="hidden">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" placeholder="Email" required class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-2  border-gray-500  text-slate-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>

                    <div class="flex flex-col mt-2">
                        <label for="tel" class="hidden">message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="tel" placeholder="message" required class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-2 border-gray-500 text-slate-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                    </div>
                    
                    <button
                      type="submit" 
                      class="bg-gradient-to-r from-[#6d28d9] via-[#7e22ce] to-[#a21caf] hover:from-[#a21caf] text-white font-bold my-4 py-2 text-center rounded-xl"
                    >
                      Send
                    </button>
                </form>
              </div>


          </div>
        
</div>
  );
};

export default Contact;
