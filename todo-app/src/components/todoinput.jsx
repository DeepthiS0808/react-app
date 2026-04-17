import { useState } from "react"

function TodoInput({addTodo}){
    const [input,setInput] = useState("")
    const handleChange = () => {
        if(input.trim() !== ""){
            addTodo(input)
            setInput("")
        }   
    }
    return(
        <div>
        <input type="text" placeholder="Add a todo" 
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={handleChange}>Add</button> 
        </div>
    )
}
export default TodoInput