import { useState } from 'react' 
import styles from '../styles/Home.module.css'
import UserSelection from '../components/UserSelection/UserSelection'
import Header from '../components/Header/Header'
const Home = () => {
  const [playerCategory, setPlayerCategory] = useState('')
  const [numberQuestions, setNumberQuestions] = useState(0)

  return (
    <div className={styles.container}>
      <Header />
      <UserSelection setPlayerCategory={setPlayerCategory} playerCategory={playerCategory}/>
    </div>
  )
}

export default Home
