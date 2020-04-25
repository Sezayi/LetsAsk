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
    <ol>
      {questions.map((question) => (
        <motion.li key={question.id} className="flex justify-center flex-row w-full p-8">
          <div className="bg-papergray w-3/4 rounded p-4">
            <p>{question.question}</p>
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
