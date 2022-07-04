import { CCard, CListGroup, CListGroupItem, CButton } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
const Todo = ({value, id, todos, settodo}) =>{

    //This delete a to-do on the list, using the imported id from List component
    const DeleteTodo = () =>{
        settodo(todos.filter((todo)=> todo.id !== id))
    }

    return (
        <>
            <CCard style={{ width: '18rem' }}>
                <CListGroup>
                    <CListGroupItem><input type="checkbox"></input> {" "} {value} {" "} <CButton color="danger" variant="outline" onClick={DeleteTodo}>Delete</CButton></CListGroupItem>
                </CListGroup>
            </CCard> 
        </>
    )
}
export default Todo;