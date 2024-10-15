export default function Sidebar({onClick}: {onClick: () => void}){
   
   
   
   
   
    return (
        <div id="container2" className="sidebar">
        <div >
        Sidebar
        </div>
        
        <br></br>
        <br></br>
        <button onClick={onClick}>Edit Recipe</button>
        <br></br>
        <br></br>
        <button onClick={onClick}>Delete Recipe</button>
        <br></br>
        <br></br>
        <button onClick={onClick}>Add Recipe</button>


        </div>

    )
}