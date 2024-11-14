import Ingredient from "./Ingredient.jsx"

export default function ItemList({food,isLoading}){
  return (
    <div>
         {isLoading?(
          <p>Loading...</p>
        ):
         (
          food.extendedIngredients.map((ingredient)=>{
          return (
            <>
              <Ingredient ingredient={ingredient} />
            </>
            
          )
        })
        )}
   
    
  
</div>
  )

}