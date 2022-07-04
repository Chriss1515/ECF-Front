import { useState } from "react";
import Todo from "./Todo";
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';


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
        <div className="list-grouping" style={{marginBottom:"10px", padding:"10px"}}>  
            <CCard>
                <CCardHeader><h2 style={{textTransform:"uppercase"}}>{listTitle} {" "}</h2> <button onClick={DeleteList}>DELETE LIST</button></CCardHeader>
                <CCardBody>
                    <CCardTitle>
                        <input type="text" value={todoValue} placeholder="Add to-do" onChange={HandleTodoValue}></input>
                        <button onClick={HandleAddTodo}>Add To-do</button>
                    </CCardTitle>
                    
                    {Todos.map((todo)=>(
                        <div key={todo.id} className="todo" style={{padding:"5px"}}>
                            <Todo value={todo.text} id={todo.id} todos={Todos} settodo={setTodo}/>
                        </div>
                    ))}
                    
                </CCardBody>
            </CCard>
            {/* <h2 style={{textTransform:"uppercase"}}>{listTitle} {" "}</h2>
            <button onClick={DeleteList}>DELETE LIST</button><br/><br/>
            <input type="text" value={todoValue} placeholder="Add to-do" onChange={HandleTodoValue}></input>
            <button onClick={HandleAddTodo}>Add To-do</button>
            
            {Todos.map((todo)=>(
                <div key={todo.id} className="todo" style={{padding:"5px"}}>
                    <Todo value={todo.text} id={todo.id} todos={Todos} settodo={setTodo}/>
                </div>
            ))} */}
        </div>
    );
}
export default List;