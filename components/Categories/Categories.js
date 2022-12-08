import { useEffect, useState } from "react"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => setCategories(data.trivia_categories))
  }, [])

  const returnDropdown = () => {
    if (categories.length) {
      return categories.map(cat => {
        return (
          <option></option>
        )
      })
    }
  }

  return (
    <select>{returnDropdown()}</select>
  )
}

export default Categories