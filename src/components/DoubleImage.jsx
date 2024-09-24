import React from 'react';
import '../styles/doubleimage.css'; 

const DoubleImage = () => {
  return (
    <div className="double-image-container">
      <div className="image-wrapper">
      <img src="/image/image1.jpeg" alt="First" className="image" />
      </div>
      <div className="image-wrapper">
      <img src="/image/image.jpeg" alt="First" className="image" />

      </div>
    </div>
  );
};

export default DoubleImage;
