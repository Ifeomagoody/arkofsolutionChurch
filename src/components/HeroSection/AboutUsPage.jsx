
import React from 'react'
import { motion } from 'framer-motion'


export default function AboutUsPage() {
  return (
    <section>
       <div className='flex justify-around items-center p-20 bg-[#F5F0E9]'>
          
          <div className=' w-[100%] '>
              
                     <motion.div
                                className='w-[100%]'
                                initial={{ opacity: 0, y: 100 }}           // start off-screen to the right
                                animate={{ opacity: 1, y: 0 }}             // slide in
                                transition={{ duration: 1, ease: 'easeInOut' }}
                         > 
              <h2 className='text-[#3b82f6f6] py-3'>ABOUT US</h2>
              <h1 className='text-4xl font-bold py-3'>WELCOME TO <br/> ARKOFSOLUTION</h1>
              <p className='text-[#999999] py-3'>A small river named Duden flows by their place and<br/> supplies it with the necessary regelialia. It is a <br/> paradisematic country, in which roasted parts of <br/> sentences fly into your mouth </p>
             
             <div className='pt-1'>
              <button className=' text-xs transition duration-150 shadow-xl font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]'>
                KNOW MORE ABOUT US
              </button>
             </div>
          </motion.div>
          </div>


          <div className=''>

                 
                     <motion.div
                                className='flex  flex-wrap gap-5 justify-center items-center'
                                initial={{ opacity: 0, y: 100 }}           // start off-screen to the right
                                animate={{ opacity: 1, y: 0 }}             // slide in
                                transition={{ duration: 2, ease: 'easeInOut' }}
                         >      
                 <img src='src/assets/sq-2.jpg' className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-4.jpg'  className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-2.jpg' className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-6.jpg'  className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-5.jpg'  className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-6.jpg'  className='w-[25%] rounded-lg '/>
                        
          </motion.div>
          </div>
      </div> 

      
    </section>
  )
}
