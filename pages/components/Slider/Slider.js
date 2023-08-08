import React, { useEffect, useState } from "react";

// Images
import cfHeartsday from "../../assets/cf/cf-heartsday-promo.jpg";
import cfMenu from "../../assets/cf/cf-menu.jpg";
import cfMilkyHalo from "../../assets/cf/cf-milky halohalo.jpg";

import Image from "next/image";
import BtnSlider from "./BtnSlider";

const images = [
  {
    caption: "Caffeina Menu",
    img: cfMenu,
    id: 1,
  },
  {
    caption: "Caffeina Heartsday Promo",
    img: cfHeartsday,
    id: 2,
  },
  {
    caption: "Caffeina Halo halo",
    img: cfMilkyHalo,
    id: 3,
  },
];

const Slider = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
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
      {images.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <Image src={obj.img} alt={obj.caption} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <div className="dots-container">
        {Array.from({ length: images.length }).map((item, index) => (
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
