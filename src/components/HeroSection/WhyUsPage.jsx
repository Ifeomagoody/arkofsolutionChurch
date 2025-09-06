
import React from 'react'

export default function WhyUsPage() {
  return (
    <>
      <section className='bg-[#1E3A8A]'>
        <div className='flex  justify-center gap-20 p-10 items-center'>
             <div className='WhyUsTextPage w-[45%] leading-10'>
                <h2 className='font-bold text-[#e7dada]'>WHY US</h2> 
                <h1 className='font-bold text-[#e7dada] text-4xl'>KEEP YOUR FAITH</h1>
                <img src='/src/assets/arkOverlay.jpg' className=' rounded-sm'/>
             </div>       
                
                    <div>                   
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
              </div>
             </div>
        
      </section>
    </>
  )
}
