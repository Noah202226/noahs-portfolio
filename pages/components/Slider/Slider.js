import React, { useEffect, useState } from "react";

import Image from "next/image";
import BtnSlider from "./BtnSlider";
import { Card, Typography } from "@mui/material";

const Slider = ({
  autoSlide = true,
  autoSlideInterval = 3000,
  images,
  appTitle,
  appDescription,
}) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <div className="container-slider">
      <div className="slider-card">
        <Typography variant="h6" textAlign={"right"}>
          {appTitle}
        </Typography>
        <Typography>{appDescription}</Typography>
      </div>
      {images?.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <Image
              style={{ objectFit: "fill" }}
              src={obj.img}
              alt={obj.caption}
              width={100}
              height={100}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <div className="dots-container">
        {Array.from({ length: images?.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
