import Categories from "../Categories/Categories"
import NumberInput from "../NumberInput/NumberInput"
import styles from '../../styles/UserSelection.module.css'
import Link from "next/link"

const UserSelection = ({setPlayerCategory, playerCategory, numberQuestions, setNumberQuestions}) => {
  return (
    <div className={styles.container}>
      <Categories setPlayerCategory={setPlayerCategory} playerCategory={playerCategory}/>
      <NumberInput setNumberQuestions={setNumberQuestions}/>
      <p className={styles.text}>Do you dare ?</p>
      <Link href={`/${playerCategory}/${numberQuestions}`}>
        <button>Enter</button>
      </Link>
    </div>
  )
}

export default UserSelection