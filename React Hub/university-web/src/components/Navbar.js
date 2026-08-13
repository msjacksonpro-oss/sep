import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/contact">contact</Link> | 
            <Link to="/students">Students</Link> | 
            <Link to="/courses">courses</Link> | 
            <Link to="/about">about</Link> | 
            
        </nav>
    );
}
export default Navbar;