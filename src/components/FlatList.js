import React, { Component } from "react";
import Flat from './Flat';

const FlatList = ({flats})=>{
  return (
    <div className='flat-list'>
       {flats.map(flat=><Flat name = {flat.name} key={flats.indexOf(flat)} price={flat.price + flat.priceCurrency} img={flat.imageUrl} className='card'/>)}
    </div>
   
  )

}

export default FlatList;