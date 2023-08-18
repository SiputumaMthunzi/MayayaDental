import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';



function ContactUs() {
  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBue2sOGZFKRA-8i58mwvnAi6tToq8_Reg&libraries=places`;    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      // Clean up the script tag when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nomudqn', 'template_mznwill', form.current, 'jVjEuMoV17C1qgUBe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const initMap = () => {
    // Initialize Google Map
    const mapOptions = {
      center: { lat: -31.8728, lng: 28.1551 }, // Set the initial center of the map (Replace with your preferred center)
      zoom: 10, // Set the initial zoom level
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Add markers for specific locations
    const locations = [
      { lat: -31.670715, lng: 28.536686, title: 'Warner Rd, Unit 2, Engcobo, 5050, South Africa' },
      { lat: -32.09474860046395, lng: 28.310833645620963, title: '408 Ian\'s Lane, Dutywa Medical Centre, Idutywa, 5000, South Africa' },
      // Add more locations as needed
    ];

    locations.forEach(location => {
      new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
      });
    });
  };

  

  return (
    <div id='contact' >
      <h1>CONTACT US</h1>

      <div id='map' style={{ height: '600px', width: '80%' }}></div>

    
        <h2>Contact Us</h2>

      
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" required name='user_name'/>
          <input type="email" placeholder="Type your E-mail"  name='user_email' required/>
          <input type="text" placeholder="Subject"  name='subject' required/>
          <textarea placeholder="Write here......." name="message"></textarea>
          <input type="submit" value='send'/>

         </form>
         <div class="contact-card-container">
    <div class="contact-card">
    <i class="fas fa-map-marker-alt"></i> 
        <h2>Address</h2>
        <p><b> 408 Ian's Lane, Dutywa Medical Centre, Idutywa, 5000.</b></p>
        <p><b> Warner street, Unit 2, eNgcobo, 5050</b></p>
    </div>
    <div class="contact-card">
    <i class="fas fa-phone"></i>
        <h2>Contact details</h2>
        <p><b>Tel.: 0450110177</b></p>
        <p><b>Cell & WhatsApp: 0748081306</b></p>
        <p><b>Email: <a href="mailto:drsisisphomayaya@mayayadental.com">drsisisphomayaya@mayayadental.com</a></b></p>

    </div>
    <div class="contact-card">
    <i class="fas fa-clock"></i>
        <h2>Operating hours</h2>
        <p><b>Monday - Friday</b></p>
        <p><b>09h00 - 17h00</b></p>
        <p><b>Saturdays - 09h00-13h00</b></p>
        <p><b>Sunday & Holidays - CLOSED</b></p>
        
    </div>
</div>

<footer className='footer'>
  {/* ... other links */}
  <p>Copyright © 2023 All Rights Reserved</p>
  <p>Designed by Siputuma Designs</p>
   {/*<a href="/privacy-policy">Privacy Policy</a> |
  <a href="/terms-and-conditions">Terms and Conditions</a>*/}
  
</footer>
      </div>
    
  );
}

export default ContactUs;
