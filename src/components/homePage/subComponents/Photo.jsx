import React,{ useState } from 'react';
import photo from "../../../images/photo.svg";
import map from "../../../images/map.png";
import arrowRight from "../../../images/arrow-right.png";

const Photo = () => {
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <div>
        <div className='photo'>
            <img src={photo} />
        <input className='input' onInput={e => setInput(e.target.value)} type="name" name='name' placeholder="See location on map" />
        <img className='map' src={map} />
        <img className='search-arrow' src={arrowRight} />
        </div>
    </div>
  )
}

export default Photo