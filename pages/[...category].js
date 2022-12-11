import { useEffect, useState } from "react"
import Question from "../components/Question/Question"

const NewThing = ({playerCategory, router, numberQuestions}) => { 
  const [userCategory, setUserCategory] = useState('')
  const [numQuestions, setNumQuestions] = useState(0)
  const [triviaQuestions, setTriviaQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  
  useEffect(() => {
    if (router.query.category) {    
      setUserCategory({name: router.query.category[0].split(',')[1], id: router.query.category[0].split(',')[0]})
      setNumQuestions(router.query.category[1])
    }
  }, [router])
  
  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${userCategory.id}&difficulty=easy&type=multiple`)
      .then(response => response.json())
      .then(data => setTriviaQuestions(data.results))
  }, [userCategory])

  const generateNewQuestion = () => {
    console.log(
      'hi'
    )
    setCurrentQuestionIndex(currentQuestionIndex + 1) 
    }
    
    return (
      <div>
      <h2>{userCategory.name}</h2>
      <Question currentQuestion={triviaQuestions[currentQuestionIndex]} generateNewQuestion={generateNewQuestion}/>
    </div>
  )
}

export default NewThing