import { Link } from 'react-router-dom';
import './Navbars.css'
const AdminNav = () => {
    return ( 
        <nav className="AdminNavbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">News</Link>
                <Link to="/Users">Sport</Link>
                <Link to="/Admin">Reel</Link>
                <Link to="/Worklife">Worklife</Link>
                <Link to="/Travel">Travel</Link>
                <Link to="/Future">Future</Link>
                <Link to="/Culture">Culture</Link>
            </div>
            <Link to="/Signin">Log Out</Link>
        </nav>
     );
}
 
export default AdminNav;