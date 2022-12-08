import { useEffect, useState } from "react"

const Categories = ({setPlayerCategory, playerCategory}) => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => setCategories(data.trivia_categories))
  }, [])

  const returnDropdown = () => {
    if (categories.length) {
      return categories.map(cat => {
        console.log(cat)
        return (
          <option value={cat.name}>{cat.name}</option>
        )
      })
    }
  }

  return (
    <select onChange={(e) => setPlayerCategory(e.target.value)}>
      <option value=''>Choose Your Poison</option>
      {returnDropdown()}
    </select>
  )
}

export default Categories