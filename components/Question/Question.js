import { useEffect, useState } from "react"

const Question = ({currentQuestion}) => {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    if (currentQuestion) {
      const randomIndex = Math.floor(Math.random() * 3)
      let totalAnswers = currentQuestion.incorrect_answers
      console.log('hi', totalAnswers)
      setResponses(totalAnswers)
    }
  }, [currentQuestion])
  
  const generateRadioButtons = () => {
    // if (responses.length) {
      return responses.map(resp => {
        console.log(resp)
        return (
          <div>
            <input type='radio' value={resp}/>
            <label for={resp}>{resp}</label>
          </div>
        )
      })
    // }
  }

  return (
    <div>Question
      {responses.length && generateRadioButtons()}
    </div>
  )
}

export default Question