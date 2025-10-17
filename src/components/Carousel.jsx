import React, { useRef,useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({ items, autoplay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

//   useEffect(() => {
//     if (!autoplay) return;
//     const timer = setInterval(nextSlide, interval);
//     return () => clearInterval(timer);
//   }, [autoplay, interval, items.length]);

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="carousel-slider">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              {item}
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};
export default Carousel;
