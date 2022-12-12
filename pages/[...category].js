import { useEffect, useState } from "react";
import Question from "../components/Question/Question";

const NewThing = ({ playerCategory, router, numberQuestions }) => {
  const [userCategory, setUserCategory] = useState("");
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (router.query.category) {
      setUserCategory({
        name: router.query.category[0],
        id: router.query.category[1],
      });
    }
  }, [router]);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${userCategory.id}&difficulty=easy&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => setTriviaQuestions(data.results));
  }, [userCategory]);

  const generateNewQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h2>{userCategory.name}</h2>
      <Question
        currentQuestionIndex={currentQuestionIndex}
        currentQuestion={triviaQuestions[currentQuestionIndex]}
        generateNewQuestion={generateNewQuestion}
      />
    </div>
  );
};

export default NewThing;
