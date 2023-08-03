import React from 'react';


function Servicebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}  alt=''/>
            <h2> {props.title}</h2>
           

        </div>

    </div>
  )
}

export default Servicebox;