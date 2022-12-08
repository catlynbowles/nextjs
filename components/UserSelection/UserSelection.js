import Categories from "../Categories/Categories"
import NumberInput from "../NumberInput/NumberInput"

const UserSelection = ({setPlayerCategory, playerCategory}) => {
  return (
    <div className="flex bg-red">
      <Categories setPlayerCategory={setPlayerCategory} playerCategory={playerCategory}/>
      <NumberInput />
      <p>Do you dare ?</p>
      <button>Enter</button>
    </div>
  )
}

export default UserSelection