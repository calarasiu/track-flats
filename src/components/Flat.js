import React,{ Component } from 'react';

const Flat = ({img, name, price})=>{
  return(
      <div className = 'card'>
        <img src={img} alt="flat" className='card-link'/>
        <div className="card-description">
          <p>{price}</p>
          <h2>{name}</h2>
        </div>
      </div> 
   )
}

export default Flat;