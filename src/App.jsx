import { useState } from "react"
import Search from "./components/Search.jsx"
import FoodList from "./components/FoodList.jsx"
import Nav from "./components/Nav.jsx"
import "./app.css"
import Container from "./components/Container.jsx"
import Innercontainer from "./components/Innercontainer.jsx"
import Fooddetail from "./components/Fooddetail.jsx"



function App() {
  const [foodData,setFoodData]= useState([])
  const [foodId,setfoodId] = useState("716300"
)
  
  return (
    
       <div className="app">
            <Nav/>
            <Search 
                foodData={foodData} 
                setFoodData={setFoodData}/>
            <Container>
              <Innercontainer>
                <FoodList 
                setfoodId={setfoodId}
                foodData={foodData} 
                setFoodData={setFoodData}/> 
              </Innercontainer> 
              <Innercontainer>
                <Fooddetail
                  foodId = {foodId}
                />
              </Innercontainer>
            </Container>
            
        </div>
  )
}

export default App
