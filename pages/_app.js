import '../styles/globals.css'
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [playerCategory, setPlayerCategory] = useState('')
  const [numberQuestions, setNumberQuestions] = useState(0)

  return <Component {...pageProps} playerCategory={playerCategory} numberQuestions={numberQuestions} setNumberQuestions={setNumberQuestions} setPlayerCategory={setPlayerCategory}/>
}

export default MyApp
