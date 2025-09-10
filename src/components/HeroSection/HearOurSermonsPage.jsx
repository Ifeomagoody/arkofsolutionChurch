
import React from 'react'
import { motion } from 'framer-motion'


export default function HearOurSermonsPage() {
  return (
    <>
      <section className=' bg-[#1E3A8A] h-[40vh] flex z-50  justify-around items-center '>
        <div className='flex flex-wrap gap-15'> 
           <motion.div
                      className=''
                      initial={{ opacity: 0, x: -100 }}           // start off-screen to the right
                      animate={{ opacity: 1, x: 0 }}             // slide in
                      transition={{ duration: 1, ease: 'easeInOut' }}
            >
         <h1 className='font-bold text-[40px] text-[#fff] '>GET BETTER BY HEARING OUR SERMONS</h1>
            </motion.div>
         </div>


         <div>
             <motion.div
                      className=''
                      initial={{ opacity: 0, x: 100 }}           // start off-screen to the right
                      animate={{ opacity: 1, x: 0 }}             // slide in
                      transition={{ duration: 1, ease: 'easeInOut' }}
            >
         <button className=' text-xs font-bold text-[#e7dada] rounded-full py-4 px-13 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]'>JOIN US</button>
            </motion.div>
        </div>
      </section>
    </>
  )
}
