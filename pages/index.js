import { useEffect } from 'react' 
import styles from '../styles/Home.module.css'
import Categories from '../components/Categories/Categories'

const Home = () => {
  const [playerCategor, setPlayerCategory] = useState('')
  return (
    <div className={styles.container}>
      <Categories playerCategory={playerCategory} setPlayerCategory={setPlayerCategory}/>
      hi
    </div>
  )
}

export default Home
