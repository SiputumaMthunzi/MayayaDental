import React, { useEffect } from 'react';

function ContactUs() {
  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBue2sOGZFKRA-8i58mwvnAi6tToq8_Reg&libraries=places`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      // Clean up the script tag when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    // Initialize Google Map
    const mapOptions = {
      center: { lat: 40.712776, lng: -74.005974 }, // Set the initial center of the map (New York City coordinates)
      zoom: 14, // Set the initial zoom level
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker to the map
    const marker = new window.google.maps.Marker({
      position: { lat: -32.09474860046395, lng: 28.310833645620963}, // New York City coordinates
      map: map,
      title: 'Our Location',
    });
  };

  return (
    <div id='contact'>
      <h1>CONTACT US</h1>

      <form>
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Type Your E-Mail' required />
        <textarea placeholder='Write Here........' name='message'></textarea>
        <input type='submit' value='Send' />
      </form>

      <div id='map' style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
}

export default ContactUs;
