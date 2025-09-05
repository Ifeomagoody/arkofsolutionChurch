
import React from 'react'

export default function AboutUsPage() {
  return (
    <section>
       <div className='flex  justify-around items-center p-20 bg-[#F5F0E9]'>
          <div className=' w-[100%] '>
              <h2 className='text-[#1E3A8A] py-3'>ABOUT US</h2>
              <h1 className='text-4xl font-bold py-3'>WELCOME TO <br/> ARKOFSOLUTION</h1>
              <p className='text-[#999999] py-3'>A small river named Duden flows by their place and<br/> supplies it with the necessary regelialia. It is a <br/> paradisematic country, in which roasted parts of <br/> sentences fly into your mouth </p>
             
             <div className='pt-1'>
              <button className=' text-xs transition duration-150 shadow-xl font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A]'>
                KNOW MORE ABOUT US
              </button>
             </div>
          </div>
          <div className='flex  flex-wrap gap-5 justify-center items-center'>
                 
                 <img src='src/assets/sq-2.jpg' className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-4.jpg'  className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-2.jpg' className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-5.jpg'  className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-6.jpg'  className='w-[25%] rounded-lg '/>
                 <img src='src/assets/sq-6.jpg'  className='w-[25%] rounded-lg '/>
                        
          </div>
      </div> 

      
    </section>
  )
}
