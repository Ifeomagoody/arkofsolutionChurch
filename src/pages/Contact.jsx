
import React from 'react'
import { motion } from 'framer-motion'


 export default function Contact(){
  
  return (
    <>
      <title>Contact Page</title>
      <link rel="icon" type="image/svg+xml" href="/phone-solid-full.svg" />

        

         <section className="bg-[#3b82f6f6] ">
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
                    GET IN TOUCH
                  </h1>
                  <p className="font-normal lg:text-base text-sm text-[#e7dada]">
                    A small river named Duden flows by their place and supplies
                    it with <br />
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts <br /> of sentences fly into your mouth.
                  </p>
                  <div>
                    <button className=" text-xs  font-bold text-[#e7dada] rounded-full py-4 px-8 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
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
                    className="lg:w-[200%] lg:h-[450px] rounded-lg md:w-[150%] w-[150%] h-[300px]"
                  />
                  
                </div>
              </motion.div>
            </div>
          </div>
        </section> 


        <section>

          <div className='flex p-10 flex-wrap bg-[#F5F0E9] sm:justify-start sm:gap-6 justify-around items-center'>
              <form>
            <motion.div
                initial={{ opacity: 0, x: -100 }} // start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // slide in
                transition={{ duration: 1, ease: "easeInOut" }}
              >
       <h1 className='font-medium text-3xl'>GET IN TOUCH</h1>
           <div className='flex py-5 items-center gap-5'>
             <label 
            htmlFor='First name'
            className='text-[#888] flex'
            >
            First name
            </label>

            <input 
            type='text'
            id='firstname'
            aria-label='First name'
            required
            className='px-15 py-5 bg-[#00000005] rounded-sm'
            />

              <label 
            htmlFor='First name'
            className='text-[#888] flex '
            >
            Last name
            </label>

            <input 
            type='text'
            id='firstname'
            aria-label='First name'
            required
            className='px-15 py-5 bg-[#00000005] rounded-sm'
            />

           </div>

             <label 
            htmlFor='First name'
            className='text-[#888] flex '
            >
            Email address
            </label>

            <input 
            type='text'
            id='firstname'
            aria-label='Email address'
            required
            className='w-full py-5 bg-[#00000005] rounded-sm'
            />
             <label 
            htmlFor='First name'
            className='text-[#888] py-3 flex '
            >
            Message
            </label>

            <textarea
              type='text'
            id='Message'
            aria-label='Message'
            required
            className='w-full py-5 bg-[#00000005] rounded-sm'
            >
            </textarea>
        <div>
                <button className='text-xs font-bold text-[#e7dada] rounded-full py-4 px-8 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]'>SEND US YOUR PRAYER REQUEST</button>
                 </div>
  </motion.div>
        </form>














              <div className=''>
                    <motion.div
                initial={{ opacity: 0, x: 100 }} // start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // slide in
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <div className='flex gap-2 py-3 items-center '>
                 <div className='h-23 w-23 rounded-full  border-2 relative border-[#1e3a8af6]'>
                 <img src='public/house-chimney-window-solid-full.svg' className='w-10 h-10 absolute top-6 left-5.5'/>
                 </div>
                 <h1 className='text-[#888]'>11, Azeez Ayorinde, Off Oni Street By Jimoh Busstop<br/> Akowonjo, Lagos</h1>
                </div>


                <div className='flex gap-2 py-3 items-center '>
                 <div className='h-23 w-23 rounded-full  border-2 relative border-[#1e3a8af6]'>
                 <img src='public/phone-solid-full.svg' className='w-10 h-10 absolute top-6 left-5.5'/>
                 </div>
                 <h1 className='text-[#888]'>11, Azeez Ayorinde, Off Oni Street By Jimoh Busstop<br/> Akowonjo, Lagos</h1>
                </div>


                <div className='flex gap-2 py-3 items-center '>
                 <div className='h-23 w-23 rounded-full  border-2 relative border-[#1e3a8af6]'>
                 <img src='public/envelope-solid-full.svg' className='w-10 h-10 absolute top-6 left-5.5'/>
                 </div>
                 <h1 className='text-[#888]'>11, Azeez Ayorinde, Off Oni Street By Jimoh Busstop<br/> Akowonjo, Lagos</h1>
                </div>
                </motion.div>
              </div>
          </div>
        </section>
    </>
  )
}

