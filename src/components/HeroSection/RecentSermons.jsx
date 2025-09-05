
import React from 'react'
import { sermons } from './RecentSermonsData'

export default function RecentSermons() {
   

  return (
    <>
      <section className='border border-red-500 '>
        <div className='bg-[#F5F0E9] flex flex-wrap pt-15 flex-col justify-center items-center'>
            <h1 className='text-[#1E3A8A] text-xs font-bold'> SERMONS </h1>
            <h2 className='text-xl font-bold'>RECENT SERMONS</h2>
            <div className='flex flex-wrap pt-10 gap-15 justify-center items-center'>
   

                {sermons.map((sermon) => {
             return (
             <div key={sermon.id} className=' border border-red-500'>
                <img src={sermon.image} className='rounded-lg pb-10'/>
            <span className=' text-base text-[#999999]'>{sermon.date}
            <span className='px-2 text-base'></span>
                {sermon.name} 
            </span>
            <h1 className='cursor-pointer text-xl font-medium'>{sermon.topic}</h1>
            <p className='text-base font-medium text-wrap  text-[#999999]'>{sermon.message}</p>     
              <div className='pt-10'>
             <button className=' text-xs transition duration-150 shadow-xl font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A]'>{sermon.button}</button>
              </div>
              </div>
             )
    })}          
            </div>
        </div> 
      </section>
    </>
  )
}
