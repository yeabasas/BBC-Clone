import './footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    
    return ( 
        <footer>
            <div className="explore">
                <div className="bottom">
                    <h2>Explore the BBC</h2>
                    <div className="footer-col">
                        
                        <ul className='first-col'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/future">Future</Link></li>
                        </ul>
                        <ul className='second-col'>
                            <li><Link to="/News">News</Link></li>
                            <li><Link to="culture">Culture</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="sport">Sport</Link></li>
                            <li><Link to="tv">TV</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="reel">Reel</Link></li>
                            <li><Link to="weather">Weather</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/worklife">Worklife</Link></li>
                            <li><Link to="/sounds">Sounds</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/travel">Travel</Link></li>
                            <li><Link to=""></Link></li>
                        </ul>
                    </div>
                    <div className="footer-row">
                        <ul>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">About the BBC</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Cookies</Link></li>
                            <li><Link to="#">Accessibility Help</Link></li>
                            <li><Link to="#">Parental Gauidance</Link></li>
                            <li><Link to="#">Contact the BBC</Link></li>
                            <li><Link to="#">BBC emails for you</Link></li>
                            <li><Link to="#">Advertise with us</Link></li>
                            <li><Link to="#">AdChoice/Do Not Sell My Info</Link></li>
                        </ul>
                    </div>
                    <p>
                        <b>Copyright &copy; {new Date().getFullYear()} BBC.</b> The BBC is not responsible for the content of external sites.
                    <Link to="#"><b>Read about our approach to external linking.</b></Link>
                    </p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;