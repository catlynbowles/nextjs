import '../styles/globals.css'
import {useState} from 'react'
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  const [playerCategory, setPlayerCategory] = useState('')
  const [numberQuestions, setNumberQuestions] = useState(0)
  const router = useRouter()

  return <Component {...pageProps} playerCategory={playerCategory} numberQuestions={numberQuestions} setNumberQuestions={setNumberQuestions} setPlayerCategory={setPlayerCategory} router={router}/>
}

export default MyApp
