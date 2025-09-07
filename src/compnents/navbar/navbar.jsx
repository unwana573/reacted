import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

function Navbar() {
    return (
        <>
            <ul className="navbar container-fluid d-flex justify-content-around p-3 transparent-bg text-black">
                <li>Home</li>
                <li>About</li>
                <li>Choose</li>
                <li>Team</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </>
    )
}

export default Navbar