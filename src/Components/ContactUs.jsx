import React, { useEffect } from 'react';

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

  const initMap = () => {
    // Initialize Google Map
    const mapOptions = {
      center: { lat: -31.8728, lng: 28.1551 }, // Set the initial center of the map (Replace with your preferred center)
      zoom: 10, // Set the initial zoom level
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Add markers for specific locations
    const locations = [
      { lat: -31.670715, lng: 28.536686, title: 'Warner Rd, Engcobo, 5050, South Africa' },
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
    <div id='contact'>
      <h1>CONTACT US</h1>

     

      <div id='map' style={{ height: '600px', width: '80%' }}></div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Lato, sans-serif' }}>

      <div style={{ backgroundColor: 'rgba(0, 195, 255, 0.7)', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
  <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Contact Information:</p>
  <p style={{ fontSize: '16px' }}>Phone: 0450110177</p>
  <p style={{ fontSize: '16px' }}>Cell/WhatsApp: 0748081306</p>
  <p style={{ fontSize: '16px' }}>Address: Warner Rd, Engcobo, 5050, South Africa</p>
</div>



</div>


     
    </div>
  );
}

export default ContactUs;
