import { useEffect, useState } from "react"

const Question = ({currentQuestion, generateNewQuestion}) => {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    if (currentQuestion) {
      const randomIndex = Math.floor(Math.random() * 3)
      let totalAnswers = currentQuestion.incorrect_answers
      if (totalAnswers.length === 3) {
        totalAnswers.splice(randomIndex, 0, currentQuestion.correct_answer)
      }
      setResponses(totalAnswers)
    }
  }, [currentQuestion])
  
  const generateRadioButtons = () => {
      return responses.map(resp => {
        return (
          <div>
            <input type='radio' id={resp} key={resp} name='answer' value={resp}/>
            <label for={resp}>{resp}</label>
          </div>
        )
      })
  }

  return (
    <div>
      <h2>{currentQuestion && currentQuestion.question}</h2>
      <form>
       {responses.length && generateRadioButtons()}
      </form>
      <button type='submit'  onClick={() => generateNewQuestion()}>Submit</button>
    </div>
  )
}

export default Question