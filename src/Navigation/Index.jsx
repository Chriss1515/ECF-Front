import {Link} from "react-router-dom";
const Navigation =()=>{
    return(
        <>  

        <div>
            <p>je suis la page home</p>
        </div>
            <Link to="/">Go Back</Link>

            <button><Link to="/table">TO-DO</Link></button>
            
        </>
    )
}
export default Navigation;