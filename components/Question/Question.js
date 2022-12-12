import { useEffect, useState } from "react";

const Question = ({ currentQuestionIndex, currentQuestion, generateNewQuestion, score, setScore }) => {
  const [responses, setResponses] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('')

  useEffect(() => {
    if (currentQuestion) {
      const randomIndex = Math.floor(Math.random() * 3);
      let totalAnswers = currentQuestion.incorrect_answers;
      if (totalAnswers.length === 3) {
        totalAnswers.splice(randomIndex, 0, currentQuestion.correct_answer);
      }
      setResponses(totalAnswers);
    }
  }, [currentQuestion]);

  const generateRadioButtons = () => {
    return responses.map((resp) => {
      resp = unescape(resp)
      return (
        <div>
          <input type="radio" id={resp} key={resp} name="answer" value={resp} onChange={(e) => setSelectedAnswer(e.target.value)}/>
          <label for={resp}>{resp}</label>
        </div>
      );
    });
  };

  const unescape = (string) => {
    return new DOMParser()
      .parseFromString(string, "text/html")
      .querySelector("html").textContent;
  }

  const checkForCorrectAnswer = () => {
    console.log(selectedAnswer, currentQuestion.correct_answer)
    selectedAnswer === currentQuestion.correct_answer ? setScore(score + 1) : 
    score >= 0 && setScore(score - 1)
    generateNewQuestion()
  }

  return (
    <div>
      <p>{currentQuestionIndex + 1} / 10</p>
      <p>{score}</p>
      <h2>{currentQuestion && unescape(currentQuestion.question)}</h2>
      <form>{responses.length && generateRadioButtons()}</form>
      <button type="submit" onClick={() => checkForCorrectAnswer()}>
        Submit
      </button>
    </div>
  );
};

export default Question;
