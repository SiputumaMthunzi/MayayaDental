import React, {useState} from 'react';
import logo from '../images/LOGO.jpeg';
import {Link} from 'react-scroll';

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  
    return (
    <nav className={nav ? "nav active" : "nav" }>
       <Link to ="main" className='logo'>
        <img src={logo} alt=''/>
       </Link>
       <input className='menu-btn' type='checkbox' id='menu-btn'/>
       <label className='menu-icon' for='menu-btn'>
          <span className='nav-icon'></span>
       </label>
       <ul className='menu'>
           <li><Link to='main'>Home</Link></li>
           <li><Link to='treatments'>Treatments</Link></li>
           <li><Link to='services'>Previous Work</Link></li>
           <li><Link to='about'>About</Link></li>
            <li><Link to='info'>Our Dentist</Link></li>
           <li><Link to='contact'>Contact</Link></li>
        
       </ul>
    </nav>
  )
}

export default Navbar;