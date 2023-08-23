import React, { useState } from 'react';
import aboutimage from '../images/image4.jpeg';

function About() {
  const [showSecondText, setShowSecondText] = useState(false);

  const toggleSecondText = () => {
    setShowSecondText(!showSecondText);
  };

  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt='' />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Welcome to Dr. S. MAYAYA DENTAL STUDIOS, where healthy smiles are our passion.
          Our experienced team is dedicated to providing you with exceptional dental care in a comfortable and friendly environment.
          From routine cleanings to cosmetic enhancements, we're here to help you achieve your best smile.
          Schedule an appointment today and experience the difference at Dr. S. MAYAYA DENTAL STUDIOS.
        </p>

        {/* Display the second text if showSecondText is true */}
        {showSecondText && (
         
         <p>
            Our clinic is committed to delivering personalized dental solutions that cater to your unique needs. Whether you're seeking general dentistry services, teeth whitening, or restorative treatments, we have you covered.
            Our skilled and caring team uses the latest techniques and technologies to ensure your comfort and satisfaction throughout your dental journey.
            Your oral health is our priority, and we strive to create a positive and stress-free dental experience for every patient.
          </p>
        
        )}

        {/* Button to toggle the visibility of the second text */}
        <button onClick={toggleSecondText}>
          {showSecondText ? 'SHOW LESS' : 'READ MORE'}
        </button>
      </div>
    </div>
  );
}

export default About;
