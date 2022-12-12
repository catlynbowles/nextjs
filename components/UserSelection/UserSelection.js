import Categories from "../Categories/Categories";
import NumberInput from "../NumberInput/NumberInput";
import styles from "../../styles/UserSelection.module.css";
import Link from "next/link";

const UserSelection = ({ setPlayerCategory, playerCategory }) => {
  const id = playerCategory.split(",")[0];
  const name = playerCategory.replace(":", "").split(",")[1];

  return (
    <div className={styles.container}>
      <Categories
        setPlayerCategory={setPlayerCategory}
        playerCategory={playerCategory}
      />
      <p className={styles.text}>Do you dare ?</p>
      <Link href={`${name}/${id}`}>
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default UserSelection;
