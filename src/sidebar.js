// import React from "react";
// import { slide as Menu } from 'react-burger-menu';
// import { Link } from "react-router-dom";

// export default props => {
//     return (
//       <Menu>
//         <a className="menu-item" href="/">
//           Home
//         </a>
  
//         <a className="menu-item" href="/laravel">
//           Laravel
//         </a>
  
//         <a className="menu-item" href="/angular">
//           Angular
//         </a>
  
//         <a className="menu-item" href="/react">
//           React
//         </a>
  
//         <a className="menu-item" href="/vue">
//           Vue
//         </a>
  
//         <a className="menu-item" href="/node">
//           Node
//         </a>
//       </Menu>
//     );
//   };


import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


const sidebar = () => {
    return (
      <div className='Navigation'>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
              },
              {
                title: 'Management',
                itemId: '/management',
                // elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </div>
    );
}

export default sidebar;