import { ChangeEvent, useState } from "react"
import { MouseEvent } from 'react';

type Props = {
    updateRecipe: (property: string, value: string, id: number) => void 
    card: {id: number, order: number, name:string, recipe: string, fontColor: string} 
    handleClose: () => void
    
}

export default function FontForm({ updateRecipe, card , handleClose, }: Props) { 
    const [formValues, setFormValues]= useState({
        order: "4", 
        name: "PBJ", 
        recipe: card.recipe || "bread, peanut butter, jelly"
    })
    
    const handleChange = (event: ChangeEvent<HTMLInputElement >)=>
        setFormValues({
            ...formValues, 
            [event.target.name]: event.target.value
        })
    
    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault() 

        updateRecipe("order", formValues.order, card.id)
        updateRecipe("name", formValues.name, card.id)
        updateRecipe("recipe", formValues.recipe, card.id)
        
        handleClose()
    }
    
    return (
        <div className= "mb-2">
            
            <label>Order Number</label> 
            <input id="order" type="number" className="form-control" name="order" onChange={handleChange} value={formValues.order}/>  
            
            <div className="mb-2">
                <label>Recipe Name</label> 
                <input id="name" type="string" className="form-control " name="name" onChange={handleChange} value={formValues.name}/> 
            </div>
            <div className="mb-2">
                <label>Ingredients: </label> 
                <input id="recipe" type="string" className="form-control" name="recipe" onChange={handleChange} value={formValues.recipe}/>
            </div>
        
            <div className="text-end">
                <button type="button"className="btn btn-secondary me-2" onClick={handleClose}>Cancel</button>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
            </div>
        
        
        
        </div> 
        
        
    )
}