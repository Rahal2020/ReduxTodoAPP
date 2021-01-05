
import React from "react"
import AddToDo from "./Components/AddToDo";
import TodoLiist from "./Components/TodoLiist";
import "./App.css"; 
const App=()=>{

 

  return (
    <div className="App">
     <h1> TO-DO-Redux</h1>
      <AddToDo />
     
      <TodoLiist />
      
    </div>
  )
  }
export default App; 