
import React from 'react'
import { motion } from 'framer-motion'


export default function WhyUsPage() {
  return (
    <>
      <section className='bg-[#1E3A8A]'>
        <div className='flex sm:flex-wrap justify-center gap-20 p-10 items-center'>
             <div className=' w-[45%] leading-10'>
                                     <motion.div
                                                className=''
                                                initial={{ opacity: 0, y: 100 }}           // start off-screen to the right
                                                animate={{ opacity: 1, y: 0 }}             // slide in
                                                transition={{ duration: 1, ease: 'easeInOut' }}
                                         > 

                
                <h2 className='font-bold text-[#e7dada]'>WHY US</h2> 
                <h1 className='font-bold text-[#e7dada] text-4xl'>KEEP YOUR FAITH</h1>
                <img src='/src/assets/arkOverlay.jpg' className=' rounded-sm'/>
             </motion.div>      
             </div> 
                
                    <div> 

                           <motion.div
                                                className=''
                                                initial={{ opacity: 0, y: 100 }}           // start off-screen to the right
                                                animate={{ opacity: 1, y: 0 }}             // slide in
                                                transition={{ duration: 2, ease: 'easeInOut' }}
                                         >                 
                <div className='flex gap-5 py-5'>

                 <div>

                <h2 className='font-bold text-[#e7dada]'>LIVE BY FAITH</h2>  
                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                
                 </div>
                   <div>

                <h2 className='font-bold text-[#e7dada]'>LOVE ONE ANOTHER</h2>  
                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                
                </div>
                </div>
                <div className='flex  gap-5 py-5 '>

                 <div>

                <h2 className='font-bold text-[#e7dada]'>BE COURAGEOUS</h2>  
                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
                
                 </div>
                   <div>

                <h2 className='font-bold text-[#e7dada]'>SEAL OF GOD</h2>  
                <p className='text-[#ffffff80]'>Far far away, behind the word <br/> mountains, far from the <br/>countries  Vokalia and Consonantia.</p>
               
                </div>
                
                </div>
              
                 <div>
                <button className=' text-xs font-bold text-[#e7dada] rounded-full py-4 px-8 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]'>SEND US YOUR PRAYER REQUEST</button>
                 </div>
              </motion.div>  
              </div>
             </div>
        
      </section>
    </>
  )
}
