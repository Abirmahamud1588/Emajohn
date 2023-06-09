import React from 'react';

import './Header.css' ;
import logo from '../../images/Logo.svg' ;
const Header = () => {
    return (
        
          <div>
              <nav className='header'>
                <img src={logo} alt="" srcset="" />
               <div className='menus'>
                <a href="/order">Order</a>
                <a href="/review">OrderReview</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>

               </div>
            </nav>
          </div>
       
    );
};

export default Header;