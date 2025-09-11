
import React from 'react'
import { Navbar } from '../components/Navbar'
import { motion } from "framer-motion";


 const Events = () => {
  return (
    <>
        <title>Events Page</title>
        <link rel="icon" type="image/svg+xml" href="/calendar-days-solid-full.svg" />
    

         <nav className="bg-[#3b82f6f6] ">
          <div className="relative bg-[url('/src/assets/arkOverlay.jpg')] bg-cover bg-center lg:w-full h-165 md:w-[100%]">
            <div className="absolute inset-0 bg-[#1e3a8af6] bg-opacity-50"></div>
            <div className="relative flex flex-wrap items-center justify-around h-full">
              <div>
                <motion.div
                  className="lg:gap-8 gap-6 flex flex-col justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <h1 className="font-bold lg:text-6xl text-white text-2xl  ">
                    ARK OF SOLUTION
                  </h1>
                  <p className="font-normal lg:text-base text-sm text-[#e7dada]">
                    A small river named Duden flows by their place and supplies
                    it with <br />
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts <br /> of sentences fly into your mouth.
                  </p>
                  <div>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-4 px-8 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      GO TO SERMON
                    </button>
                  </div>
                </motion.div>
              </div>

                <motion.div
                initial={{ opacity: 0, x: 100 }} // start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // slide in
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <div className="relative ">
                  <img
                    src="src\assets\arkOverlay.jpg"
                    className="w-[200%] h-[450px] rounded-lg"
                  />
                  
                </div>
              </motion.div>
            </div>
          </div>
        </nav>
             <Navbar />     

    
       </>
  )
}

export default Events
