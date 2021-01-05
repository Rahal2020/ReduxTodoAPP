import React from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux";


 const TodoLiist = () => {
     const list=useSelector((state)=>state.todos);
     
 


    return (
       
        <div>
           {
            list.map(el=><Todo key={el.id} el={el}/>)
           }
        </div>
   
    )
}
export default TodoLiist; 