import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/todoinput";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-10 px-4 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[150px]"></div>

      {/* Main Glass Container */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] z-10 transition-transform duration-500 hover:scale-[1.02]">
        <Header />
        <TodoInput addTodo={handleAddTodo} />
        <div className="mt-8">
          <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
