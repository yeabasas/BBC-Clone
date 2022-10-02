import images from './data/DataBase.json'
import {Link} from 'react-router-dom'
import Navbar from './navbars/Navbar';
import Footer from './footer/Footer';

const Home = () => {
    const d = new Date();
    const we = () => {
        images.blogs && images.blogs.map((item)=>
            <div className='pol' key={item.id && item.id}>
                <p>{item.title}</p>
                <img src={item.image} alt="" className="img"/>
                
            </div>
        )
    }

    return ( 
        
        <section>
            <Navbar/>
            <div className="greeting">   
                <h2>welcome to BBC.com</h2>
                <h2 className='day'>{d.toDateString()}</h2>
            </div>

            <div className="promo">
                <Link className="a" to="">{we()}</Link>
                <Link className="b" to="">b</Link>
                <Link className="c" to="">c</Link>
                <Link className="d" to="">d</Link>
                <Link className="e" to="">e</Link>
            </div>

            <div className="news-tag">
                <h2>News</h2>
            </div>

            <div className="news-promo">
                <Link className="f" to="">qwer</Link>
                <Link className="g" to="">asdf</Link>
                <Link className="h" to="">zxcv</Link>
            </div>

            <div className="sport-tag">
                <Link to=''><h2>Sport</h2></Link>
            </div>
            
            <div className="sport-promo">
                <Link className="i" to="">qwer</Link>
                <Link className="j" to="">asdf</Link>
                <Link className="k" to="">zxcv</Link>
            </div>
            
            {/* <div className="weather-tag">
                <Link to=""><h2>Weather</h2></Link>
            </div>
            
            <div className="weather">
                <Link className="cloudy" to="">
                    <img className='weatherimage' src={images.cloudy} alt="cloudy"/>
                    <h3 className='date'>{d.getDay()}</h3>
                    <h3 className='higher'>29*C</h3>
                    <h3 className='lower'>21*C</h3>
                </Link>
                <Link className="partlycloudy" to="">
                    <img className='weatherimage' src={images.partlycloudy} alt="partlycloudy"/>
                    <h3 className='date'>{d.getDay()}</h3>
                    <h3 className='higher'>29*C</h3>
                    <h3 className='lower'>21*C</h3>
                </Link>
            </div> */}

            <div className="reel-promo">
                <Link><h1>REEL</h1></Link>
                <p>The most amazing videos from the BBC</p>
                <div className="reels">
                    <Link className='q'>
                        <img src={images} alt="" />
                        <p>afgagfga</p>
                    </Link>
                    <Link className='w'>
                        <img src="" alt="" />
                        <p>mnbvnvmnb</p>
                    </Link>
                    <Link className='r'>
                        <img src="" alt="" />
                        <p>lhklhkjlhjkl</p>
                    </Link>
                </div>
            </div>
            <div className="upper">
                <h2>BBC IN OTHER LANGUAGE</h2>
                <div className='upper-row'>
                    <ul>
                        <li><Link to="">Arabic</Link></li>
                        <li><Link to="">Swahili</Link></li>                               
                        <li><Link to="">More Language</Link></li>
                    </ul>
                </div>
            </div>
            <Footer/>
</section>
     );
}
 
export default Home;