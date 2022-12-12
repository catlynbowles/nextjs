import { useEffect, useState } from "react";
import Question from "../components/Question/Question";

const NewThing = ({router}) => {
  const [userCategory, setUserCategory] = useState("");
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0)

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
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

export default NewThing;
