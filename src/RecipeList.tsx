

type RecipeListProps ={
    card: {id: number, order: number, name:string, recipe: string, fontColor: string} 
    deleteRecipe: (id: number) => void 
    updateFontColor: (id: number, color: string) => void 
}



export default function RecipeList({card, deleteRecipe, updateFontColor}: RecipeListProps ){
    
    
    
    
    
    return (
        <div style={{color: card.fontColor}} id="container">
        <h2>Recipe { card.order }</h2>
        
        <h4>{ card.name }</h4>
        <h6>Ingredients:</h6>
        <p> { card.recipe }</p> 
        <button onClick={() => deleteRecipe(card.id)}>X</button>
        <br></br>
        <br></br>
        <button onClick={() => updateFontColor(card.id, "red")} >Select Recipe</button>
        </div>
    )
}