
import React from 'react'

export default function Testimonials() {
  return (
    <>
      <section>
        <div className=' bg-[#F5F0E9] flex flex-col p-10 justify-center items-center'>
              <h3 className='font-cinzel font-bold text-xs text-[#3b82f6f6]'>TESTIMONIALS</h3>
              <h1 className='text-3xl font-bold pt-6'>LIVING TESTIMONIES</h1>
              <div className='flex justify-center p-8 gap-1 items-center'>
                   <button className='bg-[#3b82f6f6] hover:opacity-75 transition delay-150 duration-300 text-[#fff] text-xs font-light px-6 py-1.5 rounded-full opacity-0.4  cursor-pointer'>PREV</button>
                   <button className='bg-[#3b82f6f6] hover:opacity-75 transition delay-150 duration-300 text-[#fff] text-xs font-light px-6 py-1.5 rounded-full opacity-0.4  cursor-pointer'>NEXT</button>
              </div>

              <div className='bg-white p-10 flex flex-col justify-center items-center w-[90%]'>
                  <h1 className=''>FAR FAR AWAY, BEHIND THE WORD MOUNTAINS</h1>
                  <p className='italic'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right <br/> at the coast of the Semantics, a large language ocean</p>
                  <img src='src/assets/Prophet-removebg-preview.png' alt='Prophet' className='w-12 h-12 rounded-full overflow-hidden border-[#F5F0E9] border' />
                  <h2 className='text-base font-bold'>Prophet D. Okonkwo</h2>
                  <h2 className='text-sm font-medium text-[#888888]'>Church Visitor</h2>
              </div>
        </div>
      </section>
    </>
  )
}
