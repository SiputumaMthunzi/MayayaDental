import React from 'react';
import Servicebox from './Servicebox';
import fimage1 from '../images/fimage1.jpeg';
import fimage2 from '../images/fimage2.jpeg';
import fimage3 from '../images/fimage3.jpeg';
import fimage4 from '../images/fimage4.jpeg';



function OurServices() {
  return (
    <div id='services'>
        <h1>Our Services</h1>
        <div className='a-container'>
            <Servicebox  image={fimage1} title="Restorations"/>
            <Servicebox  image={fimage2} title="Dentures"/>
            <Servicebox  image={fimage3} title="Grills"/>
            <Servicebox  image={fimage4} title="Crown And Bridges"/>

        </div>
        
        </div>
  )
}

export default OurServices;