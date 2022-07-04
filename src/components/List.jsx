import { useState } from "react";
import Todo from "./Todo";


const List = ({listTitle, idList, Lists, setList}) =>{

    const [Todos, setTodo]=useState([]);
    const [todoValue, setTodoValue]=useState("");
    const data={id:Todos.length+1, text:todoValue}

    const HandleTodoValue = (e) =>{
        setTodoValue(e.target.value);
    }

    const HandleAddTodo = () =>{
        setTodo((prev)=> [...prev, data]);
        setTodoValue("");
    }

    const DeleteList = () =>{
        setList(Lists.filter((list)=> list.id !== idList))
    }

    
    return(
        <>  
            <h2 style={{textTransform:"uppercase"}}>{listTitle} {" "} <button onClick={DeleteList}>DELETE LIST</button></h2>
            <input type="text" value={todoValue} placeholder="Add to-do" onChange={HandleTodoValue}></input>
            <button onClick={HandleAddTodo}>Add To-do</button>
            
            {Todos.map((todo)=>(
                <div key={todo.id} className="todo" style={{padding:"5px"}}>
                    <Todo value={todo.text} id={todo.id} todos={Todos} settodo={setTodo}/>
                </div>
            ))}
        </>
    );
}
export default List;