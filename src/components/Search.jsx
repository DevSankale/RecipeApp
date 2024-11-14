import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "20bb976b3d234bc9a75e22c0a64f7221"
export default function Search({foodData,setFoodData}){
  const [query,setQuery] = useState("pizza")
  
  useEffect(()=>{
   async function fetchFood(){
     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
     const data = await res.json();
     console.log(data.results)
     setFoodData(data.results)
    }
    fetchFood();
  },[query])
  return (
    <div className={styles.searchcontainer}>
      <input className={styles.input}type="text" 
      value={query}
      onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}