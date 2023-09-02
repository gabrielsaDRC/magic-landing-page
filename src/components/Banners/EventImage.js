import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import './EventImage.css';

function EventImage() {

  //Carousel 
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
    src: './images/banner_info.png',
    alt: 'Image 1',
    },
    {
    src: './images/banner_card.jpeg',
    alt: 'Image 2',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };


  return (
    <Container>
        <Paper elevation={3} className="banners" style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.7)' }}>
            
        <div className="carousel">
                <div className="carousel-container">
                    <div className="carousel-image-container">
                      {images.map((image, index) => (
                      <img
                          key={index}
                          src={image.src}
                          alt={image.alt}
                          className={index === currentSlide ? 'active' : ''}
                      />
                      ))}
                    </div>
                </div>
                {/*<div className="carousel-buttons">
                    <button onClick={handlePrevSlide}><i className="fas fa-chevron-left"></i></button>
                    <button onClick={handleNextSlide}><i className="fas fa-chevron-right"></i></button>
                </div>*/}
            </div>
        </Paper>
    </Container>

  );
}

export default EventImage;