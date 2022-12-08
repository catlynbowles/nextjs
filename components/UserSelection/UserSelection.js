import Categories from "../Categories/Categories"
import NumberInput from "../NumberInput/NumberInput"
import styles from '../../styles/UserSelection.module.css'

const UserSelection = ({setPlayerCategory, playerCategory}) => {
  return (
    <div className={styles.container}>
      <Categories setPlayerCategory={setPlayerCategory} playerCategory={playerCategory}/>
      <NumberInput />
      <p className={styles.text}>Do you dare ?</p>
      <button>Enter</button>
    </div>
  )
}

export default UserSelection