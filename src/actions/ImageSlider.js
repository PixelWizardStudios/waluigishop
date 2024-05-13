import React, { useState, useEffect } from 'react';
import '../styles/imageSlider.css'; // Import CSS file for styling

const ImageSlider = ({ items, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [items, interval]);

  return (
    <div className="image-slider">
      {items.map((item, index) => (
        
        <div
        key={index}
        className={index === currentImageIndex ? 'active' : 'inactive'}
        >
          <img src={item.image} alt={'Slide ${index} '}/>
          <p> {item.text} </p>

        </div>
        
      ))}
    </div>
  );
};

export default ImageSlider;