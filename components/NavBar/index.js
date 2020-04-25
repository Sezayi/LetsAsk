import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <motion.section className="flex items-center justify-between bg-white shadow p-4 pl-8 lg:w-full lg:fixed lg:z-10 lg:top-0 ">
        <Link href="/">
          <a className="font-bold text-lg">About let's ask</a>
        </Link>
      </motion.section>
    </>
  );
};

export default NavBar;
