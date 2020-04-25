import React, { useState } from "react";
import { TextInput } from "grommet";
import { motion } from "framer-motion";
import { Button } from "grommet";
import { Add } from "grommet-icons";
import styled from "styled-components"

const StyledInput = styled(TextInput)`
 background-color: #ffffff;
`

import firebase from "../../src/firebase";

const AskQuestion = () => {
  const [twitter, setTwitter] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [question, setQuestion] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("questions")
      .add({ twitter, hashtag, question })
      .then(() => setTwitter(""), setHashtag(""), setQuestion(""));
  }

  return (
    <form className="lg:mt-8 px-2" onSubmit={onSubmit}>
      <div className="flex flex-row justify-center">
        <div className="text-4xl"> @ </div>
        <div className="w-64 px-2">
          <StyledInput
            placeholder="ElonMusk"
            value={twitter}
            onChange={(e) => setTwitter(e.currentTarget.value)}
          />
        </div>
        <div className="text-4xl"> # </div>
        <div className="w-64 px-2">
          <StyledInput
            placeholder="AskElon"
            value={hashtag}
            onChange={(e) => setHashtag(e.currentTarget.value)}
          />
        </div>
      </div>
      <h2 className="font-cursive text-center tracking-widest text-4xl mt-8">
        Your burning question
      </h2>
      <div className="flex flex-row justify-center ">
        <div className="w-3/4 px-2 mt-4">
          <StyledInput
            placeholder="Is there a technological limit to what you are capable of creating?"
            value={question}
            onChange={(e) => setQuestion(e.currentTarget.value)}
          />
        </div>
        <div className="px-2 mt-4">
          <button className="outline-none"><Button primary={true} type={'submit'} size={"large"} icon={<Add />} label="submit" /></button>
        </div>
      </div>
    </form>
  );
};

export default AskQuestion;
