import React, { useState } from "react";
import { TextInput } from "grommet";
import { motion } from "framer-motion";
import { Button } from "grommet";
import { Add } from 'grommet-icons';

const AskQuestion = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  return (
    <motion.section className="bg-white lg:mt-8 px-2 ">
      <div className="flex flex-row justify-center">
        <div className="text-4xl"> @ </div>
        <div className="w-64 px-2">
          <TextInput
            placeholder="ElonMusk"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="text-4xl"> # </div>
        <div className="w-64 px-2">
          <TextInput
            placeholder="AskElon"
            value={value2}
            onChange={(event) => setValue2(event.target.value2)}
          />
        </div>
      </div>
      <h2 className="font-cursive text-center tracking-widest text-4xl mt-8">
        Your burning question
      </h2>
      <div className="flex flex-row justify-center ">
        <div className="w-3/4 px-2 mt-4">
          <TextInput
            placeholder="Is there a technological limit to what you are capable of creating?"
            value={value3}
            onChange={(event) => setValue3(event.target.value3)}
          />
        </div>
        <div className="px-2 mt-5">
          <Button icon={<Add />} label="Submit" onClick={() => {}} />
        </div>
      </div>
    </motion.section>
  );
};

export default AskQuestion;
