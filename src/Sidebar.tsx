import { Button } from "react-bootstrap"
import RecipeList from "./RecipeList"

type SidebarProps = {
    addNewRecipes: () => void 
    recipes: Array<{id: number, order: number, name:string, recipe: string, fontColor: string}>
    deleteRecipe: (id: number) => void 
    updateRecipe: ( property: string, value: string, id: number ) => void 
    
}


    
export default function Sidebar({ recipes ,addNewRecipes, deleteRecipe, updateRecipe,  }: SidebarProps ){
   
    
   
   
    return (
        <div id="container2" className="sidebar">
        <div >
        Add A Recipe 
        
        
        
        
        </div>
        
        <br></br>
        <Button onClick={addNewRecipes}>Add Recipe</Button>
        
        <br></br> 
        <br></br>
        
        
        <div>
            { recipes.map(r => <RecipeList 
            
            updateRecipe={updateRecipe} 
            deleteRecipe={deleteRecipe} 
            key={r.id}
            card={r}/> ) }
            
            
            
            
        </div>

        </div>

    )
}