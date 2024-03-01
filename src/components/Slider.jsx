import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import imageOne from "../images/abstract01.jpg";
import imageTwo from "../images/abstract02.jpg";
import imageThree from "../images/abstract04.jpg";
import imageFour from "../images/abstract03.jpg";



function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,

  };

  return (


    <Box
    className="headingbox"
    component="main"
    style={{ marginTop: "180px", width: "100%" }}
  >
    <Box className="main-box">
      <Typography className="heading-text">
        Explore Your Future with
      </Typography>
      <Typography
        variant="h2"
        component="div"
        className="logo_text heading-text2"
        sx={{
          color: "linear-gradient(270deg, #029ED8 0%, #3F5EFB 99.97%)",
        }}
      >
        NetWorkStranger
      </Typography>
      <Typography className="heading-content">
        We believe in the power of connections and the unlimited potential
        they hold. As we continue to redefine the future of professional
        networking, we're on the lookout for talented individuals who share
        our passion for innovation. Explore exciting career opportunities
        with us, where your skills meet cutting-edge technology.
      </Typography>
    </Box>
    <Box className="black-box">
      <Box className="inner-black-box main-box">
        <Typography className="first-black-component">
          How is Life at
        </Typography>
        <Typography className="second-black-component">
          NetWorkStrangers
        </Typography>
        <Typography className="third-black-component">
          At NetWorkStranger, we don't just build connections; we build a
          culture of excellence. Join a workplace where innovation meets
          collaboration, and every idea has the potential to make a
          difference. Discover a vibrant atmosphere that encourages growth,
          values diversity, and celebrates success.
        </Typography>
        <Typography className="third-black-component">
          Here, work isn't just a task; it's a journey of exploration,
          learning, and accomplishment. Dive into a culture that nurtures
          creativity, fosters teamwork, and empowers you to reach new
          heights. Life at NetWorkStranger is more than a job; it's an
          adventure of endless possibilities.
        </Typography>
   
      </Box>
      <Box
      className="secondBox"
     >
        <div className="slider-container" >   
      <Slider {...settings}>
        <div >
        <img src={imageOne}></img>
        </div>
        <div>
        <img src={imageTwo}></img>
        </div>
        <div>
        <img src={imageThree}></img>
        </div>
        <div>
        <img src={imageFour}></img>
        </div>
        <div>
        <img src={imageThree}></img>
        </div>
        <div>
        <img src={imageOne}></img>
        </div>
      </Slider>
    </div>
    </Box>
    </Box>
    
  </Box>
   
  );
}

export default CenterMode;
