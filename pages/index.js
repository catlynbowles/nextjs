import { useEffect } from 'react' 
import styles from '../styles/Home.module.css'
import Categories from '../components/Categories/Categories'

const Home = () => {
  return (
    <div className={styles.container}>
      <Categories />
      hi
    </div>
  )
}

export default Home
