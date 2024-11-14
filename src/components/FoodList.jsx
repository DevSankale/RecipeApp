import Fooditem from "./Fooditem.jsx";


export default function FoodList({foodData,setfoodId}){
  return (
    <div>
      {foodData.map((food)=>(
        <Fooditem 
        key={food.id}
        food= {food}
        setfoodId = {setfoodId}
        />
      )  
      )}
   </div>
  )
}  