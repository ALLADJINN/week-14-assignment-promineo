import { Button, Modal } from "react-bootstrap" 
import FontForm from "./FontForm"
import { useState } from "react"


type RecipeListProps ={
    card: {id: number, order: number, name:string, recipe: string, fontColor: string} 
    deleteRecipe: (id: number) => void 
    updateRecipe: (property: string, color: string, id: number ) => void 
    
}



export default function RecipeList({card, deleteRecipe, updateRecipe, }: RecipeListProps ){
    
    const [isNewAddRecipeOpen, setIsNewAddRecipeOpen] = useState(false)
    const handleClose = () => setIsNewAddRecipeOpen(false)
    
    
    
    
    return (
        <div style={{color: card.fontColor}} id="container">
        <h2>Recipe { card.order }</h2>
        
        <h4>{ card.name }</h4>
        <h6>Ingredients:</h6>
        <p> { card.recipe }</p> 
        <button onClick={() => deleteRecipe(card.id)}>X</button>
        <br></br>
        <br></br>
        <button onClick={() => updateRecipe("fontColor", "red", card.id, )} >Select Recipe</button>
        
        <Button onClick={() => setIsNewAddRecipeOpen(true)}>Update Recipe</Button> 
        
        <Modal show={isNewAddRecipeOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adding A Recipe</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <FontForm  updateRecipe={updateRecipe} card={card} handleClose={handleClose} /> 
        </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
        
        
        
        
        
        
        
        </div>
    )
}