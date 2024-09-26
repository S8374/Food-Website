import React, { useEffect, useState } from 'react';
import './Body.css'; // Add your CSS in a separate file

const AutoPlaySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "https://images.pexels.com/photos/16062655/pexels-photo-16062655/free-photo-of-food-in-pot.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Explore the Serenity of Nature",
      desc: "Unwind in the tranquility of breathtaking landscapes, where peace and beauty blend effortlessly."
    },
    {
      img: "https://images.pexels.com/photos/4500115/pexels-photo-4500115.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Adventure Awaits You",
      desc: "Discover hidden gems and thrilling experiences in the heart of untouched wilderness."
    },
    {
      img: "https://images.pexels.com/photos/8697542/pexels-photo-8697542.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Escape to Exotic Beaches",
      desc: "Feel the warm sand beneath your feet as you stroll along serene, sun-kissed shores."
    },
    {
      img: "https://images.pexels.com/photos/27556250/pexels-photo-27556250/free-photo-of-middle-eastern-food.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Experience Urban Wonders",
      desc: "Get lost in the vibrant energy of world-class cities, full of culture, art, and excitement."
    },
    {
      img: "https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Marvel at Stunning Sunsets",
      desc: "Witness nature's most breathtaking moments as the sky paints itself in shades of orange and pink."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2500); // Slides change every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);

  return (
    <div className="img-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        >
          <img src={slide.img} alt={`Slide ${index + 1}`} />
          <div className="info">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-desc">{slide.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoPlaySlider;
 