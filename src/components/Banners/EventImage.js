import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import './EventImage.css';

import image1 from './banner_info.png'
import image2 from './banner_card.jpeg'

function EventImage() {

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

  return (
    <section className='banner-section'>
      <Container className='banner-container'>
        <div className='row align-banner'>
          <Paper elevation={3} className="banners" style={{ background: 'black' }}>
            <div style={{display: 'inline-grid'}}>
              <img className='banner-img' src={image1}></img>
            </div>
          </Paper>
          <Paper elevation={3} className="banners" style={{ background: 'black' }}>
            <div style={{display: 'inline-grid'}}>
              <img className='banner-img' src={image2}></img>
            </div>
          </Paper>
          <Paper elevation={3} className="banners" style={{ background: '#f0ebf8' }}>
            <div style={{display: 'inline-grid'}}>
              <iframe className='responsive-iframe' src="https://docs.google.com/forms/d/e/1FAIpQLSfBsI3c49tEPeqq28WCLNEta-YwBD01QjGIYN03KVdU2g-HLQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
            </div>
          </Paper>
        </div>
        </Container>
    </section>

  );
}

export default EventImage;