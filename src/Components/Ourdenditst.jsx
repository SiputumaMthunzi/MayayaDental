import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dentistImage1 from '../images/Mayaya1.jpeg';
import dentistImage2 from '../images/Mayaya2.jpeg';
import dentistImage3 from '../images/Studio.jpeg';
import dentistImage4 from '../images/image4.jpeg';

function Ourdentist() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id='info'>
      <h1 style={{ textAlign: 'center' }}>Our Dentists</h1>
      <div className="dentist-card">
      <div className="slider-container">
          <Slider {...sliderSettings}>
          <div>
              <img src={dentistImage4} alt="Dentist 4" className="dentist-image" />
            </div>
            <div>
              <img src={dentistImage1} alt="Dentist 1" className="dentist-image" />
            </div>
            <div>
              <img src={dentistImage2} alt="Dentist 2" className="dentist-image" />
            </div>
            <div>
              <img src={dentistImage3} alt="Dentist 3" className="dentist-image" />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
        <div className="dentist-info" style={{ textAlign: 'center', padding: '20px', fontWeight: 'bold' }}>
          <p>
            <strong>Dr. Lwando Mayaya</strong> is a skilled and compassionate dentist with a degree in Dentistry from the University of Western Cape. <br />
            He is dedicated to providing top-quality dental care, staying up-to-date with the latest advancements in the field.
            <br /> Dr. Mayaya creates a welcoming environment for his patients and excels in general dentistry, preventive care, and cosmetic procedures.
            Outside of his practice, he actively supports community dental health programs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourdentist;
