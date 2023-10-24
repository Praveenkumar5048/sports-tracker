import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
import img1 from '../Resources/cricketcarousel.jpg';
import img3 from '../Resources/basketcarousel.jpg';
import img2 from '../Resources/footballcarousel.jpg';

const images = [
   img1,
   img2,
   img3,
 
];

function Slider() {
  return (
    <div className="carousel-container">
      <Carousel 
      useKeyboardArrows={true}
      stopOnHover={false}
      showThumbs={false}
      interval={2000}
      transitionTime={800}
      >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;