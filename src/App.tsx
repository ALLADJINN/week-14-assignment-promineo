import Sidebar from "./Sidebar"
import RecipeList from "./RecipeList"

const testData = [
  {
     id: 0,
     order: 1, 
     name: "Spaghetti", 
     recipe: "noodles, pasta sauce, meatballs"

  }, 
  {
    id: 1, 
    order: 2, 
    name: "burrito",
    recipe: "tortilla, carne asada, beans, salsa, onions, celantro"
  }, 
  {
    id: 2, 
    order: 3, 
    name: "taco", 
    recipe: "tortilla, carne asada, beans, salsa, onions, celantro"
  }
]


export default function App (){
  return <div className="mx-auto">
      <h1 className="Heading">Recipe Manager</h1>
      <Sidebar onClick={() => alert("this is a button!")}/>
      <RecipeList card={testData[0]}/>
      <RecipeList card={testData[1]}/>
      <RecipeList card={testData[2]}/>
    </div> 
  
}
