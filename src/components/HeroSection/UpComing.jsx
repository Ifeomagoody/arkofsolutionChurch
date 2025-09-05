
import React from 'react'

export default function UpComing() {
  return (
    <>
      <section>
        <div className='flex flex-wrap justify-center gap-20 pt-15 items-center'>
          <div>
            <img src='src/assets/sq-2.jpg' className='rounded-md'/>
          </div>
          <div className='upcoming-texts '>
              <h2 className='text-xs font-bold text-[#3b82f6f6] leading-10'>UPCOMING SERMONS</h2>
              <h1 className='text-[26.1176px] font-cinzel font-semibold leading-10'>WE MUST BE DOERS OF THE WORD NOT HEARERS ONLY</h1>
              <p className='italic'>By Prophet <strong>D. Okonkwo</strong></p>
              <p className='leading-10'>Timer will be here</p>
              <button className=' text-xs transition duration-150 shadow-xl font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A]'>JOIN THIS SERMON</button>
          </div>
        </div>
      </section>
    </>
  )
}
