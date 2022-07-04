import { useState } from "react";
import List from "./List";
import '../assets/css/listContainer.css';

const ListContainer = () =>{
    const [Lists, setList] = useState([]);
    const [listValue, setListValue] =  useState("");

    const data = {id:Lists.length+1, text:listValue}

    const HandleListValue = (e) =>{
        setListValue(e.target.value)
    }

    const HandleAddList = () =>{
        setList((prev)=> [...prev, data]);
        setListValue("")
    }

    return(
        <>
            <input type="text" value={listValue} onChange={HandleListValue}></input>
            <button onClick={HandleAddList} placeholder="Add list">CREATE LIST</button>
            {Lists.map((list)=>(
                <div className="list" key={list.id}>
                    <ul className="list-ul" style={{display:"flex"}}>
                        <li className="list-li" style={{listStyle:"none"}}>
                             <List listTitle={list.text} idList={list.id} setList={setList} Lists={Lists}></List>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
}
export default ListContainer;