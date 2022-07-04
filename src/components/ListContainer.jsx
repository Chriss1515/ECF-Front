import { useState } from "react";
import List from "./List";
import '../assets/css/listContainer.css';
import { CContainer, CRow, CCol } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'


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
        <div style={{padding:"20px"}}>
            <div className="header" style={{borderBottom:"2px solid black"}}>
                <input type="text" value={listValue} onChange={HandleListValue} placeholder="Add List"></input>
                <button onClick={HandleAddList}>CREATE LIST</button>
                
            </div>
            
            {Lists.map((list)=>(
                <div key={list.id} style={{display:"inline-block"}}>
                    <CContainer>
                        <CRow>
                            <CCol sm="auto"><List listTitle={list.text} idList={list.id} setList={setList} Lists={Lists}></List></CCol>
                        </CRow>
                    </CContainer>
                </div>
            ))}
        </div>
    )
}
export default ListContainer;