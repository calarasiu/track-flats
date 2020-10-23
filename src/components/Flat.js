import React,{ Component } from 'react';

const Flat = ({img, name, price})=>{
  return(
    <div className="card" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${img})`}} >
      <div className="card-category">{price}</div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div> 
   )
}

export default Flat;
