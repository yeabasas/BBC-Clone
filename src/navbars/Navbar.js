import Logo from '../logo.jpg';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
/>


const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="left">
                <Link to=""><img src={Logo} alt="BBC" className='logo-img'/></Link>
                <Link to="/signIn"className="material-icon"><PersonSharpIcon  fontSize="large"/> Sign In</Link>
            </div>
            <div className="middle">
                <Link to="/">Home</Link>
                <Link to="/News">News</Link>
                <Link to="/Sport">Sport</Link>
                <Link to="/Admin">Reel</Link>
                <Link to="/Worklife">Worklife</Link>
                <Link to="/Travel">Travel</Link>
                <Link to="/Future">Future</Link>
                <Link to="/Culture">Culture</Link>
            </div>
            <input type="text" className="search" placeholder={SearchSharpIcon + "search BBC"}></input>
        </nav>

     );
}
 
export default Navbar;