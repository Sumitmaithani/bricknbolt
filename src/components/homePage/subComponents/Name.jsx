import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const Name = () => {
  return (
    <div>
        <h1 className='name-heading'>Monica Gamage Shop</h1>
        <h4 className='name-subheading'>Wattala, Sri Lanka</h4>
        <div className='rate'>
        <Rate className='rating' defaultValue={2} count={3} style={{color:"#FA5D5D"}} />
    </div>
    </div>
  )
}

export default Name