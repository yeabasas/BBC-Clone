import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default props => {
    return (
        <div id="outer-container">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
            <main id="page-wrap">
                <Menu>
                    <Link className="menu-item" to="/DashBoard">
                    Dashboard
                    </Link>
            
                    <Link className="menu-item" to="/AddNews">
                    Add News
                    </Link>
            
                    <Link className="menu-item" to="/">
                    Home
                    </Link>
                </Menu>
            </main>
        </div>
    );
  };