import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { NavLink } from 'react-router-dom'     

function Navbar() {
    return (
        <>
            <ul className="navbar container-fluid d-flex justify-content-around p-3 transparent-bg ">
                <NavLink to="/" className=' text-decoration-none text-black'><li>Home</li></NavLink>
                <NavLink to="/about" className=' text-decoration-none text-black'><li>About</li></NavLink>
                <NavLink to="/choose" className=' text-decoration-none text-black'><li>Choose</li></NavLink>
                <NavLink to="/team" className=' text-decoration-none text-black'><li>Team</li></NavLink>
                <NavLink to="/pricing" className=' text-decoration-none text-black'><li>Pricing</li></NavLink>
                <NavLink to="/contact" className=' text-decoration-none text-black'><li>Contact</li></NavLink>
            </ul>
        </>
    )
} 

export default Navbar