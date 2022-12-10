import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const NewThing = ({playerCategory, router, numberQuestions}) => { 
  const routery = useRouter()
  console.log(routery)
  // const que = router.query.category[1]
  
  useEffect(() => {
    
    if (router.query.category) {    
      console.log(router.query, 'router.query')
      const cat = {name: router.query.category[0].split(',')[1], id: router.query.category[0].split(',')[0]}
      console.log(cat)
    }
  }, [router])

  return (
    <div>
      {/* <h2>{categoryName}</h2> */}

    </div>
  )
}

export default NewThing