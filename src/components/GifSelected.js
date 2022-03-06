import React from 'react';

function GifSelected(props) {

  return (
    <div className='GifSelected' >
      <img src={props.selectedGifUrl} alt='' className='GifSelectedImg'/>
    </div>
  );
}

export default GifSelected;