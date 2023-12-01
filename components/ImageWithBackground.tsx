// ImageWithBackground.jsx
import React from 'react';

const ImageWithBackground = ({ imageUrl, altText, backgroundColor, width, height }) => {
  const containerStyle = {
    backgroundColor: backgroundColor || 'transparent',
    padding: '16px',
    width: width || '100%',
    height: height || 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px', // Adding border-radius for rounded corners
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt={altText} className="rounded-lg" style={imageStyle} />
    </div>
  );
};

export default ImageWithBackground;
