'use client';

import React, { useEffect } from 'react';

let slideIndex = 0;
let slideInterval: NodeJS.Timeout | null = null; // متغیر برای نگه داشتن تایمر

const Slider: React.FC = () => {
  useEffect(() => {
    // فقط در کلاینت (مرورگر) اجرا می‌شود
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;

    // شروع اسلایدها
    showSlides();

    // رویدادهای ماوس فقط در کلاینت تنظیم می‌شوند
    const sliderContainer = document.querySelector('.slider-container') as HTMLElement | null;
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseover', stopSlides);
      sliderContainer.addEventListener('mouseout', resumeSlides);
    }

    // پاک‌سازی تایمر و رویدادها هنگام unmount شدن
    return () => {
      stopSlides();
      if (sliderContainer) {
        sliderContainer.removeEventListener('mouseover', stopSlides);
        sliderContainer.removeEventListener('mouseout', resumeSlides);
      }
    };
  }, []);

  const showSlides = () => {
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;

    // مخفی کردن تمام اسلایدها
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }

    // افزایش اندیس و تنظیم اندیس در صورت بیشتر شدن از تعداد اسلایدها
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    // نمایش اسلاید جدید
    slides[slideIndex].style.opacity = "1";

    // تنظیم زمان تعویض اسلاید
    slideInterval = setTimeout(showSlides, 3000); // تغییر تصویر هر 3 ثانیه
  };

  const stopSlides = () => {
    if (slideInterval) {
      clearTimeout(slideInterval);
    }
  };

  const resumeSlides = () => {
    slideInterval = setTimeout(showSlides, 3000);
  };

  return (
    <div className="slider-container">
      <div className="slide">Slide 1</div>
      <div className="slide">Slide 2</div>
      <div className="slide">Slide 3</div>
      {/* دکمه‌ها یا دیگر محتواهای اسلایدر */}
    </div>
  );
};

export default Slider;
