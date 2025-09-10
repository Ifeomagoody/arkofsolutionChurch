
import React, { useState } from "react";
import { Testimonies } from "./TestimonialsData";
import ReactPaginate from "react-paginate";
import { motion } from 'framer-motion'

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 1; // testimonies per page

  // total pages
  const pageCount = Math.ceil(Testimonies.length / perPage);

  // slice data for current page
  const offset = currentPage * perPage;
  const currentItems = Testimonies.slice(offset, offset + perPage);

  // handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section>
      <div className="">
        <motion.div
                                        className='bg-[#F5F0E9] flex flex-col py-10 justify-center items-center'
                                        initial={{ opacity: 0, x: 100 }}           // start off-screen to the right
                                        animate={{ opacity: 1, x: 0 }}             // slide in
                                        transition={{ duration: 1, ease: 'easeInOut' }}
                                 > 
        <h3 className="font-cinzel font-bold text-xs text-[#3b82f6f6]">
          TESTIMONIALS
        </h3>
        <h1 className="text-3xl font-bold p-6">LIVING TESTIMONIES</h1>


        {/* Render only testimonies for current page */}
        {currentItems.map((testimony, index) => (

      
          <div
            key={index}
            className="bg-white p-15 flex flex-col justify-center items-center w-[90%] mb-6 rounded-lg shadow"
          >
            <h1 className="font-bold text-lg">{testimony.heading}</h1>
            <p className="italic">{testimony.testimonial}</p>
            <img
              src={testimony.image}
              alt="Prophet"
              className="w-12 h-12 rounded-full overflow-hidden border-[#F5F0E9] border"
            />
            <h2 className="text-base font-bold">{testimony.nameOfTestifier}</h2>
            <h2 className="text-sm font-medium text-[#888888]">
              {testimony.typeOfTestifier}
            </h2>
              </div>
             
        
        ))}
             {/* Pagination Component */}
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
           breakLabel={null}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex pt-15 justify-center items-center gap-5 mt-6"}
          pageClassName={"w-2  h-2 border border-[#888888] cursor-pointer rounded-full"}
          activeClassName={"bg-[#3b82f6f6] hover:opacity-75 transition delay-150 duration-300 text-[#fff] text-xs font-light  rounded-full opacity-0.4  cursor-pointer"}
          previousClassName={" bg-[#3b82f6f6] hover:opacity-75 transition delay-150 duration-300 text-[#fff] text-xs font-light px-5 py-2 rounded-full opacity-0.4  cursor-pointer"}
          nextClassName={"bg-[#3b82f6f6] hover:opacity-75 transition delay-150 duration-300 text-[#fff] text-xs font-light px-5 py-2 rounded-full opacity-0.4  cursor-pointer"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
          pageLinkClassName={"hidden"}
          pageLabelBuilder={() => ""}
        />
        

       
         </motion.div>
      </div>
    </section>
  );
}

