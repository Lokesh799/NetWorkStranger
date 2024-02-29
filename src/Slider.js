import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlideAnimationComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Glide Animation Example
      </Typography>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/200/300" alt="Image 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" alt="Image 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" alt="Image 3" style={{ width: '100%' }} />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </Paper>
  );
};

export default GlideAnimationComponent;