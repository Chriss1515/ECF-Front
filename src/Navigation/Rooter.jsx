import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableList from "../components/TableList";
import Navigation from "./Index";
const Rooter =()=>{
    return(
        <>
            <Router>
                <Navigation></Navigation>
                <Routes>
                    {/* <Route exact path="/" element={<Navigation/>}></Route> */}
                    <Route path="/table" element={<TableList/>}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default Rooter;