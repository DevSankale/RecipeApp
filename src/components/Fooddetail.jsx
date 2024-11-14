import { useEffect, useState } from "react"
import styles from "./FoodDetails.module.css"
import Ingredients from "./ItemList.jsx"
import ItemList from "./ItemList.jsx"



export default function Fooddetail({foodId}){
  const [food,setFood] =  useState({})
  const [isLoading,setIsLoading] = useState(true)
  const URL = ` https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "20bb976b3d234bc9a75e22c0a64f7221"
  useEffect(()=>{
       async function fetchFood(){
          const res = await fetch(`${URL}?apiKey=${API_KEY}`)
          const data = await res.json()
          console.log(data)
          setFood(data)
          setIsLoading(false)
        }
        fetchFood();
  },[foodId])
  
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}>{food.title}</h1>
        <img className={styles.recipeimage}src={food.image} alt = ""/>
        <div className={styles.recipedetails}>
              <span>⏰{food.readyInMinutes} Minutes 
              </span>
              <span>{food.vegetarian?"🥕Vegetarian" : "🥩Non-Vegetarian"}
              </span> 
              <span> <strong>👪 Serves {food.servings}</strong>
              </span>
              <span>{food.vegan ? "🍀Vegan" : ""}</span>
        </div>
        <div>
          <span><strong>💲{Math.round(food.pricePerServing/100)}.00 Price per Serving.</strong>  </span>
        </div>
          <h2>Ingredients</h2>
          <ItemList food={food} isLoading={isLoading}/>
          <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
          {isLoading?<p>Loading...</p>: <p> {food.analyzedInstructions[0].steps.map((step)=>{
              return (
                <li>{step.step}</li>
              )
          })}
          </p>}
          </ol>
        </div>
        </div>
    </div>
   
  )
}