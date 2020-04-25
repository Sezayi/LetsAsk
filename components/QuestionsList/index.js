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
    <ol className="mt-8">
      {questions.map((question) => (
        <motion.li key={question.id} className="flex justify-center flex-row w-full px-8 py-4">
          <div className=" flex flex-row bg-papergray w-3/4 rounded p-4">
      <p className="mr-2">{question.question}</p> <i>#{question.hashtag}</i>
          </div>
          <div className="bg-papergray rounded p-4">
            <button>Vote</button>
          </div>
        </motion.li>
      ))}
    </ol>
  );
};

export default QuestionsList;
