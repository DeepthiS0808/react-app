import {useState} from "react"
import Header from "./components/Header"
import TodoInput from "./components/todoinput"
import TodoList from "./components/todoList"  
function App(){
  const [todos,setTodos]=useState([])
  const handleAddTodo=(newTodo)=>{
    setTodos([...todos,newTodo])
  }
  const handleDeleteTodo=(index)=>{
    setTodos(todos.filter((_,i)=>i!==index))
  }
  return(
    <>
    <Header />
    <TodoInput addTodo={handleAddTodo} />
    <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
    </>
  )
}   
export default App