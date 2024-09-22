"use client";
import "@/public/css/generic.css";
import "@/public/css/js-image-slider.css";
import "@/public/js/mcVideoPlugin";
import "@/public/js/js-image-slider";

import { useState, useEffect } from "react";

const Slider = () => {
  return (
    <>
      <div id="sliderFrame">
        <div id="slider">
          <img src="/images/image-slider-1.jpg" alt="به سورس کد خوش آمدید" />
          <a className="video" href="http://vimeo.com/18867695">
            <img src="/images/image-slider-2.jpg" alt="به سورس کد خوش آمدید" />
          </a>
          <a className="video" href="http://www.youtube.com/watch?v=P0G_2tiivxE">
            <img src="/images/image-slider-3.jpg" alt="به سورس کد خوش آمدید" />
          </a>
          <img src="/images/image-slider-4.jpg" />
          <a
            className="video"
            href="http://vimeo.com/18560206"
          >
            <img src="images/image-slider-5.jpg" alt="به سورس کد خوش آمدید" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
