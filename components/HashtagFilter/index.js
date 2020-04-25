import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";


const StyledWrapper = styled.div`

`

const HashtagFilter = () => {
  return (
    <>
      <motion.section className=" w-full mt-16 ">
        <StyledWrapper className="flex flex-row justify-around p-4">
       <p className="font-bold p-2  "> See Q and A's for </p>
           <ul className="flex flex-row w-3/4 justify-around items-center">
           <li className="rounded py-2 px-4 border-solid border-2 border-orange-300"> #AskElon </li>
           <li> #AskObama </li>
           <li> #AskOprah </li>
           <li> #AskRutte </li>
           <li> #AskDalaiLama </li>
           <li> #AskKeanu</li>
           <li> #AskMerkel </li>
           <li> #AskTrump </li>
           </ul>
           <a className="underline p-2">See More</a>
           </StyledWrapper>
      </motion.section>
    </>
  );
};

export default HashtagFilter;
