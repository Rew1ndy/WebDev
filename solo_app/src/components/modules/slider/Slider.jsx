import React, { useEffect, useState } from "react";
import {
  SliderContainer,
  ImagesWrapper,
  Image,
  Button,
  NavigationContainer,
} from "./slider-styled.js";

import "./slider.css";

const images = Array.from({ length: 9 }, (_, index) =>
  require(`../../imgs/img-slider/img_slider (${index + 1}).jpg`)
);

function Slider() {
  const itemsPerPage = 4; // Количество отображаемых картинок
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loopDirection, setLoopDirection] = useState(1); // Направление анимации
  

  const maxIndex = images.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (loopDirection) {
        if (currentIndex < maxIndex) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setLoopDirection(0);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setLoopDirection(1);
        }
      }

    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, loopDirection, maxIndex]);

  return (
    <div className="slider-image-container">
      <SliderContainer>
        <ImagesWrapper
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </ImagesWrapper>
        <NavigationContainer>
          <Button onClick={prevSlide} disabled={currentIndex === 0}>
            ◀
          </Button>
          <div className="pages-container">
            {images.map((_, index) => ( 
              <div key={index} 
                  className={`holder ${currentIndex === index ? "holder-active" : ""}`} 
              ></div> 
            ))}
          </div>
          <Button onClick={nextSlide} disabled={currentIndex === maxIndex}>
            ▶
          </Button>
        </NavigationContainer>
      </SliderContainer>
    </div>
  );
}

export default Slider;
