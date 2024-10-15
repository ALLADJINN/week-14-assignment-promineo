export default function RecipeList({card}: {card: {order: number, name:string, recipe: string}}){
    
    
    
    
    
    return (
        <div id="container" >
        <h2>Recipe { card.order }</h2>
        
        <h4>{ card.name }</h4>
        <h6>Ingredients:</h6>
        <p> { card.recipe }</p>
        </div>
    )
}