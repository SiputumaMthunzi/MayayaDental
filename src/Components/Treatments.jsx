import React from 'react';

function Treatments() {
  const treatmentsData = [
    {
      title: 'GENERAL DENTISTRY & PAEDIATRIC DENTISTRY',
      description: 'Routine Dental Check-ups, Fillings, Scaling And Polishing',
    },
    {
      title: 'PROSTHETIC DENTISTRY',
      description: 'Crowns, Bridges, Implants',
    },
    {
      title: 'AESTHETIC & COSMETIC DENTISTRY',
      description: 'Teeth Whitening, Smile Reconstruction, Full Mouth Rehabilitation',
    },
    {
      title: 'SPECIAL INTEREST IN ENDODONTICS WITH MICROSCOPE',
      description: 'Root Canals',
    },
    {
      title: 'CONSCIOUS SEDATION FOR DENTAL ANXIETY',
      description: 'Please inquire for further information',
    },
    {
      title: 'DENTURES',
      description: 'Custom-Made',
    },
  ];

  return (
    <div
      id='treatments'
      style={{
        padding: '20px',
        background: 'linear-gradient(4deg, rgba(174,191,207,1) 0%, rgba(81,167,118,1) 100%)',
        fontFamily: 'Lato',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Treatments</h1>
      <table style={{ width: '100%' }}>
        <tbody>
          {[0, 3].map((rowStart, rowIndex) => (
            <tr key={rowIndex}>
              {treatmentsData.slice(rowStart, rowStart + 3).map((treatment, colIndex) => (
                <td key={colIndex} style={{ padding: '10px', textAlign: 'center', verticalAlign: 'top' }}>
                  <div className='treatment-box' style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px',  background: 'linear-gradient(4deg, rgba(170,191,207,1) 0%, rgba(81,167,118,1) 100%)'}}>
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{treatment.title}</h2>
                    <p style={{ fontSize: '1rem' }}>{treatment.description}</p>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Treatments;
