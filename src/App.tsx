import Sidebar from "./Sidebar"

import { useState } from "react" 



const TEST_DATA = [
  {
     id: 0,
     order: 1, 
     name: "Spaghetti", 
     recipe: "noodles, pasta sauce, meatballs",
     fontColor: "black"

  }, 
  {
    id: 1, 
    order: 2, 
    name: "burrito",
    recipe: "tortilla, carne asada, beans, salsa, onions, celantro",
    fontColor: "black"
  }, 
  {
    id: 2, 
    order: 3, 
    name: "taco", 
    recipe: "tortilla, carne asada, beans, salsa, onions, celantro",
    fontColor: "black"
  }
]


export default function App (){
  const [recipes, setRecipes] = useState(TEST_DATA)
  
  
   
  const addNewRecipes = () => {
    
    const newRecipe ={
      id: recipes.length ? recipes[recipes.length - 1].id + 1: 0,
      order: 4, 
      name: "salad", 
      recipe: "lettuce, tomato, ranch, cruttons",
      fontColor: "black"
    }

    setRecipes([ ...recipes, newRecipe])
    
  
  }
  
  const deleteRecipe = (id: number) => {
    setRecipes( recipes.filter(r => r.id !== id))
  }
  
  const updateFontColor = (idToUpdate: number, newColor: string ) => {
    setRecipes(recipes.map(item => (
      item.id !== idToUpdate ? item : {
        ...item, 
        fontColor: newColor 
      }
    )))
  }
  
  return <div className="mx-auto">
      <h1 className="Heading">Recipe Manager</h1>
      
      <Sidebar 
      updateFontColor= {updateFontColor}
      deleteRecipe = {deleteRecipe} 
      recipes={recipes} 
      addNewRecipes={addNewRecipes} 
      />
      
      

      
      
    </div>  
  
}
