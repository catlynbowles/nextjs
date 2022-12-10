import { useState } from 'react' 
import styles from '../styles/Home.module.css'
import UserSelection from '../components/UserSelection/UserSelection'
import Header from '../components/Header/Header'
const Home = ({playerCategory, setPlayerCategory, setNumberQuestions, numberQuestions}) => {
  return (
    <div className={styles.container}>
      <Header />
      <UserSelection setPlayerCategory={setPlayerCategory} playerCategory={playerCategory} setNumberQuestions={setNumberQuestions} numberQuestions={numberQuestions}/>
    </div>
  )
}

export default Home
