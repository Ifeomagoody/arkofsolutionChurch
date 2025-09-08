
import React from 'react'

export default function OurServicesPage() {
  return (
    <section>
         <div className="bg-[#F5F0E9] relative  flex flex-wrap justify-center items-center">
                 <div className='bg-white p-30 flex flex-col justify-center items-center w-[90%] shadow'>
                   <h2 className='text-[#3b82f6f6] text-xs  font-bold'>OUR SERVICES</h2>
                   <h1 className='text-4xl p-5 font-bold'>CHURCH SERVICES</h1>

          

                   <div className='flex items-center pt-15 gap-10  justify-center'>
                    <div className='flex flex-col items-center'>
                       <img src='public/house-chimney-window-solid-full.svg' className='w-15 '/> 
                       <h2 className='pt-5 text-lg font-bold'>WORSHIP</h2>
                       <p className='pt-5 text-[#888888]'>Far far away, behind the word mountain, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>          
                    <div className='flex flex-col items-center'>
                       <img src='public/leaf-solid-full.svg' className='w-15 '/> 
                       <h2 className='pt-5 text-lg font-bold'>BAPTISM</h2>
                       <p className='pt-5 text-[#888888]'>Far far away, behind the word mountain, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>          
                    <div className='flex flex-col items-center'>
                       <img src='public/book-solid-full.svg' className='w-15 '/> 
                       <h2 className='pt-5 text-lg font-bold'>EXHORTATION</h2>
                       <p className='pt-5 text-[#888888]'>Far far away, behind the word mountain, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>          
                   </div>
                 </div>
         </div>
    </section>
  )
}
