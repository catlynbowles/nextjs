import { useState } from 'react' 
import styles from '../styles/Home.module.css'
import UserSelection from '../components/UserSelection/UserSelection'

const Home = () => {
  const [playerCategory, setPlayerCategory] = useState('')
  const [numberQuestions, setNumberQuestions] = useState(0)

  return (
    <div className={styles.container}>
      <UserSelection setPlayerCategory={setPlayerCategory} playerCategory={playerCategory}/>
    </div>
  )
}

export default Home
