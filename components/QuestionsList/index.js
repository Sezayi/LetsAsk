import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import firebase from "../../src/firebase";

function useQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("questions")
      .onSnapshot((snapshot) => {
        const newQuestions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setQuestions(newQuestions);
      });
  }, []);
  return questions;
}

const QuestionsList = () => {
  const questions = useQuestions();

  return (
    <ol className="mt-4 p-4 bg-papergray">
      {questions.map((question) => (
        <>
          <motion.li key={question.id} className=" flex justify-center items-center w-full px-8 py-4">
              <div className=" flex shadow flex-row bg-white w-3/4 rounded p-4">
                <p className="mr-2">{question.question}</p>{" "}
                <i>#{question.hashtag}</i>
              </div>
              <div className="bg-papergray ml-4">
                <button className="rounded bg-action text-white py-2 px-3">Vote</button>
              </div>
        
          </motion.li>
        </>
      ))}
    </ol>
  );
};

export default QuestionsList;
