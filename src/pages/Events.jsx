
import React, {useState} from 'react'
import { Navbar } from '../components/Navbar'
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import { Testimonies } from '../components/HeroSection/TestimonialsData';
// import { Testimonies } from "./TestimonialsData";





 export default function Ministries() {
    const [currentPage, setCurrentPage] = useState(0);
  const perPage = 2; // testimonies per page

  // total pages
  const pageCount = Math.ceil(Testimonies.length / perPage);

  // slice data for current page
  const offset = currentPage * perPage;

    const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };


  return (
    <>
        <title>Ministries Page</title>
        <link rel="icon" type="image/svg+xml" href="/calendar-days-solid-full.svg" />
    

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
              <img src='src/assets/images/rect-img-1.jpg' className='rounded-sm max-h-60 object-cover'/>
              <div className='w-full py-4'>
               <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
                <h2>LIVE BY FAITH NOT BY SIGHT</h2>
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
              <img src='src/assets/sq-2.jpg' className='rounded-sm w-[80%] max-h-60 object-cover'/>
              <div className='w-full py-4 '>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/rect-img-3.jpg' className='rounded-sm max-h-60 object-cover'/>
              <div className='w-full py-4'>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/sq-4.jpg' className='rounded-sm w-[80%] max-h-60 object-cover'/>
              <div className='w-full py-4'>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/sq-5.jpg' className='rounded-sm w-[80%] max-h-60 object-cover'/>
              <div className='w-full py-4'>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/sq-6.jpg' className='rounded-sm w-[80%] max-h-60   object-cover'/>
              <div className='w-full py-4'>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/rect-img-3.jpg' className='rounded-sm max-h-60 object-cover'/>
              <div className='w-full py-4'>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/sq-2.jpg' className='rounded-sm w-[80%] max-h-60 object-cover'/>
              <div className='w-full py-4'>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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
              <img src='src/assets/images/rect-img-1.jpg' className='rounded-sm max-h-60 object-cover'/>
              <div className=' w-full py-4 '>
                <span className='px-1 text-[#888]'>15 Jan 2020 •</span><span className=' text-[#888]'>PROPHET D. OKONKWO</span>
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


            
                   <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex gap-2 mt-6"}
          pageClassName={"px-3 text-[#3b82f6] py-1 border rounded-full cursor-pointer"}
          activeClassName={"bg-[#3b82f6] text-white"}
          previousClassName={"px-3 py-1 border text-[#3b82f6] rounded-full cursor-pointer"}
          nextClassName={"px-3 py-1 border text-[#3b82f6] rounded-full cursor-pointer"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
         </motion.div>
         </div>
       </section>

  

            
       </>
  )
}


