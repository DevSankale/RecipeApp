import styles from "./fooditem.module.css"

export default 
function Fooditem({food,setfoodId}){
  return (
    <div className={styles.itemcontainer}>
        <div className={styles.content}>
          <p key={food.id} className={styles.paragraph}>
          {food.title}
        </p></div>
        <img className={styles.image} src={food.image}/>
        <div className={styles.buttoncontainer}>
        <button onClick={()=>{
          console.log(food.id)
          setfoodId(food.id)
        }}className={styles.button}>View Recipe</button>
          </div>
    </div>
)
  
}