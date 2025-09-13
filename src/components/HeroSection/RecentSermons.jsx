import React from "react";
import { sermons } from "./RecentSermonsData";
import { motion } from "framer-motion";

export default function RecentSermons() {
  return (
    <>
      <section className=" ">
        <div className="bg-[#F5F0E9] flex flex-wrap pt-15 flex-col justify-center items-center">
          <h1 className="text-[#3b82f6f6] text-xs font-bold"> SERMONS </h1>
          <h2 className="text-xl font-bold">RECENT SERMONS</h2>
          <div className="flex md:flex-wrap sm:flex-wrap pt-10 gap-15 justify-center items-center">
            {sermons.map((sermon) => {
              return (
                <motion.div
                  className="flex md:flex-wrap sm:flex-wrap pt-10 gap-15 justify-center items-center"
                  initial={{ opacity: 0, y: -100 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <div key={sermon.id} className="">
                    <img src={sermon.image} className="rounded-lg pb-10" />
                    <span className=" text-base text-[#999999]">
                      {sermon.date}
                      <span className="px-2 text-base"></span>
                      {sermon.name}
                    </span>
                    <h1 className="cursor-pointer text-xl font-medium">
                      {sermon.topic}
                    </h1>
                    <p className="text-base font-medium text-wrap  text-[#999999]">
                      {sermon.message}
                    </p>
                    <div className="py-3">
                      <button className=" text-xs transition duration-150 shadow-xl font-bold text-[#e7dada] rounded-full py-3 px-6 cursor-pointer bg-[#3b82f6f6] hover:bg-white hover:text-[#3b82f6f6]">
                        {sermon.button}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
