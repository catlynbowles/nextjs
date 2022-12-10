import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const NewThing = ({playerCategory, router, numberQuestions}) => { 
  const [userCategory, setUserCategory] = useState('')
  const [numQuestions, setNumQuestions] = useState(0)
  
  useEffect(() => {
    if (router.query.category) {    
      setUserCategory({name: router.query.category[0].split(',')[1], id: router.query.category[0].split(',')[0]})
      setNumQuestions(router.query.category[1])
    }
  }, [router])

  return (
    <div>
      {/* <h2>{categoryName}</h2> */}

    </div>
  )
}

export default NewThing