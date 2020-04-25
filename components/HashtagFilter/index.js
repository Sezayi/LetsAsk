import React from "react";
import { motion } from "framer-motion";

const HashtagFilter = () => {
  return (
    <>
      <motion.section className="bg-gray-200 w-full mt-16 ">
        <div className="flex flex-row justify-around p-4">
       <p className="font-bold  "> See Q and A's for </p>
           <ul className="flex flex-row w-3/4  justify-around">
           <li> #AskElon </li>
           <li> #AskObama </li>
           <li> #AskOprah </li>
           <li> #AskRutte </li>
           <li> #AskDalaiLama </li>
           <li> #AskKeanu</li>
           <li> #AskMerkel </li>
           <li> #AskTrump </li>
           </ul>
           <a className="underline">See More</a>
           </div>
      </motion.section>
    </>
  );
};

export default HashtagFilter;
