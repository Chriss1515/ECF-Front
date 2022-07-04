import { useState } from "react"
import ListContainer from "./ListContainer";
import {CCard, CCardHeader, CCardBody } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';


const TableList = () =>{
    const[Tables, setTable]=useState([]);
    const [TableTitle, setTableTitle] = useState("");
    // const [visible, setVisible] = useState(false);

    const dataTable = {id:Tables.length+1, title:TableTitle}

//function addGroup will add a new tab on click, using a table state
    const AddGroupList =()=>{
        setTable((prev)=>[...prev, dataTable]);
        setTableTitle("")
    }
//function Handletitle set a new title for a tab
    const HandleTitle =(e)=>{
        setTableTitle(e.target.value);
    }

   

    return(
        <div className="container">
            <h2>TRELO</h2>
            <input type="text" value={TableTitle} onChange={HandleTitle}></input>{" "}
            <button onClick={AddGroupList}>ADD GROUP LIST</button><br/><br/>
            {Tables.map((table)=>(
                <div key={table.id} style={{padding:"5px"}}>

                    {/* <CButton onClick={() => setVisible(!visible)} color="danger">{table.title}</CButton>
                    <CModal visible={visible} onClose={() => setVisible(false)} size="xl">
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle></CModalTitle>
                        </CModalHeader>
                        <CModalBody><ListContainer setTable={setTable} id={table.id} Tables={Tables}></ListContainer></CModalBody>
                        <CModalFooter>
                            <CButton color="secondary">
                            Close
                            </CButton>
                        </CModalFooter>
                    </CModal> */}
                    <CCard>
                        <CCardHeader color="danger">{table.title}</CCardHeader>
                        <CCardBody>
                            <ListContainer setTable={setTable} id={table.id} Tables={Tables}></ListContainer>
                        </CCardBody>
                    </CCard>
                    
                </div>
            ))}
        </div>
    )
}
export default TableList;