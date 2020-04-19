import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.section className="flex justify-center bg-white lg:w-full mt-32 ">
       <h1 className="font-display font-sans text-6xl">LET'S ASK</h1>
      </motion.section>
    </>
  );
};

export default Hero;
