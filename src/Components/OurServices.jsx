import React, { useState } from 'react';
import Servicebox from './Servicebox';
import fimage1 from '../images/fimage1.jpeg';
import fimage2 from '../images/fimage2.jpeg';
import fimage3 from '../images/fimage3.jpeg';
import fimage4 from '../images/fimage4.jpeg';
import fimage5 from '../images/fimage5.jpeg';
import fimage6 from '../images/fimage6.jpg';

function OurServices() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div id='services'>
      <div className='service-header'>
        <h1>Our Services</h1>
      </div>
      <div className='a-container'>
        <table>
          <tbody>
            <tr>
              <td>
                <Servicebox image={fimage1} title="Restorations" />
              </td>
              <td>
                <Servicebox image={fimage2} title="Dentures" />
              </td>
              <td>
                <Servicebox image={fimage3} title="Grills" />
              </td>
            </tr>
            {showMore && (
              <tr>
                <td>
                  <Servicebox image={fimage4} title="Crown And Bridges" />
                </td>
                <td>
                  <Servicebox image={fimage5} title="Whitening" />
                </td>
                <td>
                  <Servicebox image={fimage6} title="Extractions" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button onClick={toggleShowMore} >
        {showMore ? 'Hide Services' : 'View More Services'}
      </button>
    </div>
  );
}

export default OurServices;
