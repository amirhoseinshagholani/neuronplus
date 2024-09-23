'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

const ImageSlider: React.FC = () => {
  const slides = [
    '/img/image1.jpg',
    '/img/image2.jpg',
    '/img/image3.jpg',
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const startSlideShow = () => {
    slideInterval.current = setInterval(showSlides, 10000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const changeSlide = (direction: number) => {
    stopSlideShow();
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = slides.length - 1;
      } else if (newIndex >= slides.length) {
        newIndex = 0;
      }
      return newIndex;
    });
    startSlideShow();
  };

  useEffect(() => {
    startSlideShow();
    return () => {
      stopSlideShow();
    };
  }, []);

  return (
    <div
      className={styles.sliderContainer}
      onMouseOver={stopSlideShow}
      onMouseOut={startSlideShow}
    >
      {slides.map((src, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{ opacity: index === slideIndex ? 1 : 0 }}
        >
          <img className='rounded-xl' src={src} alt={`Slide ${index + 1}`}  />
        </div>
      ))}
      <button className={`${styles.prev} ${styles.navButton}`} onClick={() => changeSlide(-1)}>
        &#10095;
      </button>
      <button className={`${styles.next} ${styles.navButton}`} onClick={() => changeSlide(1)}>
        &#10094;
      </button>
    </div>
  );
};

export default ImageSlider;
