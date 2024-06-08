import React from 'react';
import fondo from "../fondo.jpg"
export default function PostCard() {
  

  return (
    <div className='postcard'>
        <img src={fondo}/>
        <div>
            <h1>COSA</h1>
            <p>4 min</p>
        </div>
        <p>08/06/2024</p>
        <p>cosa cosa cosa</p>
    </div>      
  );
}
