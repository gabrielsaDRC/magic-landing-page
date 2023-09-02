import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import './EventImage.css';

import image1 from './banner_info.png'
import image2 from './banner_card.jpeg'

function EventImage() {

  //Carousel 
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
    src: image1,
    alt: 'Image 1',
    },
    {
    src: image2,
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
    <section className='banner-section'>
      <Container className='banner-container'>
        <div className='row align-banner'>
          <Paper elevation={3} className="banners" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
            <div>
              <img className='banner-img' src={image1}></img>
            </div>
          </Paper>
          <Paper elevation={3} className="banners" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
            <div>
              <img className='banner-img' src={image2}></img>
            </div>
          </Paper>
        </div>
      </Container>
    </section>

  );
}

export default EventImage;