

import React from 'react'
import { Navbar } from '../components/Navbar'
import { motion } from "framer-motion";



 export default function Ministries() {
  return (
    <>
        <title>Events Page</title>
        <link rel="icon" type="image/svg+xml" href="/church-solid-favicon.png" />
    

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
                    className="lg:w-[200%] lg:h-[450px] rounded-lg md:w-[150%] w-[150%] h-[300px]"
                  />
                  
                </div>
              </motion.div>
            </div>
          </div>
        </section>


       <section className='bg-[#F5F0E9]'>
         <div >
               <motion.div
               className='flex  flex-row flex-wrap gap-11 justify-center p-15 items-center w-full'
                initial={{ opacity: 0, y: 100 }} // start off-screen to the right
                animate={{ opacity: 1, y: 0 }} // slide in
                transition={{ duration: 2, ease: "easeInOut" }}
              >
           
             <div className=''>
              <img src='src/assets/sq-6.jpg' className='w-full max-h-64   object-cover'/>
              <div className='bg-white    w-full p-4 flex flex-col justify-center '>
                <h2>WOMEN'S MINISTRY</h2>
                <p className='text-[#888] text-sm'>Far far away, behind the word mountain, far from <br/> the countries
                         Vokalia and Consonantia, there live the blind texts</p>
                          <div className='py-4'>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      READ MORE
                    </button>
                  </div>
              </div>
             </div>
             <div className=''>
              <img src='src/assets/sq-4.jpg' className='w-full max-h-64 object-cover'/>
              <div className='bg-white    w-full p-4 flex flex-col justify-center '>
                <h2>CHILDREN MINISTRY</h2>
                <p className='text-[#888] text-sm'>Far far away, behind the word mountain, far from <br/> the countries
                         Vokalia and Consonantia, there live the blind texts</p>
                          <div className='py-4'>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      READ MORE
                    </button>
                  </div>
              </div>
             </div>
             <div className=''>
              <img src='src/assets/images/rect-img-1.jpg' className='w-full max-h-64 object-cover'/>
              <div className='bg-white    w-full p-4 flex flex-col justify-center '>
                <h2>PERSONAL MINISTRY</h2>
                <p className='text-[#888] text-sm'>Far far away, behind the word mountain, far from <br/> the countries
                         Vokalia and Consonantia, there live the blind texts</p>
                          <div className='py-4'>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      READ MORE
                    </button>
                  </div>
              </div>
             </div>
             <div className=''>
              <img src='src/assets/sq-5.jpg' className='w-full max-h-64 object-cover'/>
              <div className='bg-white    w-full p-4 flex flex-col justify-center '>
                <h2>WOMEN'S MINISTRY</h2>
                <p className='text-[#888] text-sm'>Far far away, behind the word mountain, far from <br/> the countries
                         Vokalia and Consonantia, there live the blind texts</p>
                          <div className='py-4'>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      READ MORE
                    </button>
                  </div>
              </div>
             </div>
             <div className=''>
              <img src='src/assets/sq-2.jpg' className='w-full max-h-64 object-cover'/>
              <div className='bg-white    w-full p-4 flex flex-col justify-center '>
                <h2>CHILDREN MINISTRY</h2>
                <p className='text-[#888] text-sm'>Far far away, behind the word mountain, far from <br/> the countries
                         Vokalia and Consonantia, there live the blind texts</p>
                          <div className='py-4'>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      READ MORE
                    </button>
                  </div>
              </div>
             </div>
             <div className=''>
              <img src='src/assets/rect-img-3.jpg' className='w-full max-h-64 object-cover'/>
              <div className='bg-white    w-full p-4 flex flex-col justify-center '>
                <h2>PERSONAL MINISTRY</h2>
                <p className='text-[#888] text-sm'>Far far away, behind the word mountain, far from <br/> the countries
                         Vokalia and Consonantia, there live the blind texts</p>
                          <div className='py-4'>
                    <button className=" text-xs font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                      READ MORE
                    </button>
                  </div>
              </div>
             </div>
             </motion.div>
         </div>
       </section>

       <section className='bg-[#1e3a8af6] p-15'>
           <div className='flex flex-wrap lg:justify-around items-center'>
                <div className=''>
                  <h1 className='text-[#3b82f6f6] py-5'>WHY US</h1>
                  <h1 className='text-4xl font-bold text-[#e7dada] py-5'>YOU MATTER TO GOD, <br/>YOU MATTER TO US.</h1>
                   <img src='src/assets/sq-6.jpg' className='w-full rounded-sm max-h-64 py-5 object-cover'/>
                </div>


                   
                                    <div> 
                
                                           <motion.div
                                                                className=''
                                                                initial={{ opacity: 0, y: 100 }}           // start off-screen to the right
                                                                animate={{ opacity: 1, y: 0 }}             // slide in
                                                                transition={{ duration: 2, ease: 'easeInOut' }}
                                                         >                 
                                 <h2 className='font-medium text-sm text-[#e7dada] py-5'>Far far away, behind the word mountains, far from the countries Vokalia <br/>and Consonantia, there live the blind texts. Separated they live in <br/> Bookmarksgrove right at the coast of the Semantics, a large language<br/> ocean.</h2>
                                <div className='flex gap-5 py-5'>
                                 <div>
                                <h2 className='font-bold text-[#e7dada]'>PEACE WITH GOD</h2>  
                                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                                
                                 </div>
                                   <div>
                
                                <h2 className='font-bold text-[#e7dada]'>RELATIONSHIP FOR THE SOUL</h2>  
                                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                                
                                </div>
                                </div>
                                <div className='flex  gap-5 py-5 '>
                
                                 <div>
                
                                <h2 className='font-bold text-[#e7dada]'>IDENTIFYING LIMITATIONS</h2>  
                                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                                
                                 </div>
                                   <div>
                
                                <h2 className='font-bold text-[#e7dada]'>HIS KINGDOM</h2>  
                                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                               
                                </div>
                                
                                </div>
                              
                                 <div className='py-6'>
                                <button className=' text-xs font-bold text-[#e7dada] rounded-full py-4 px-8 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]'>SEND US YOUR PRAYER REQUEST</button>
                                 </div>
                              </motion.div>  
                              </div>
           </div>
       </section>

            
       </>
  )
}

