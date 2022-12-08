const Categories = () => {
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  
  return (
    <div> cats</div>
  )
}

export default Categories