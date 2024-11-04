import RecipeList from "./RecipeList"

type SidebarProps = {
    addNewRecipes: () => void 
    recipes: Array<{id: number, order: number, name:string, recipe: string, fontColor: string}>
    deleteRecipe: (id: number) => void 
    updateFontColor: (id: number, color: string) => void 
}


export default function Sidebar({ recipes ,addNewRecipes, deleteRecipe, updateFontColor }: SidebarProps ){
   
   
   
   
   
    return (
        <div id="container2" className="sidebar">
        <div >
        Add A Recipe 
        </div>
        
        
        
        
        <br></br>
        <button onClick={addNewRecipes}>Add Recipe</button>
        <div>
            { recipes.map(r => <RecipeList 
            updateFontColor={updateFontColor} 
            deleteRecipe={deleteRecipe} 
            key={r.id}
            card={r}/> ) }
            
            
            
            
        </div>

        </div>

    )
}