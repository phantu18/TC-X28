import React, { useState, useEffect } from "react";
import img1 from "../assest/banner/5hodysexfmsvhr69-0_0_desktop.jpg";
import img2 from "../assest/banner/banner_1728871735b631099b56450fddea60194675ed1ec7.jpeg";
import img3 from "../assest/banner/banner_17298465351f8a419356fabea1925a6dbdd0ac19d7.jpeg";
import img4 from "../assest/banner/slider_1.webp";

const slides = [
  {
    image: img1,
    text: "Welcome to Slide 1",
  },
  {
    image: img2,
    text: "Discover Slide 2",
  },
  {
    image: img3,
    text: "Explore Slide 3",
  },
  {
    image: img4,
    text: "Experience Slide 4",
  },
];

const BannerProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full  md:h-[90vh] sm:h-[20rem] sm:min-w-[320px] overflow-hidden z-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full md:h-auto sm:h-auto sm:object-contain"
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
};

export default BannerProduct;
