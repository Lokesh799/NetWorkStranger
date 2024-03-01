import * as React from "react";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { Box, ThemeProvider } from "@mui/material";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import employeeImg from "../images/employee.jpg";
import Google from "../images/Google.png";
import info from "../images/info.png";
import accent from "../images/accent.png";
import micro from "../images/micro.png";

function Container() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Box style={{ maxWidth: 1280, margin: "80px auto 0px" }}>
      <Typography className="jobHeading">Latest Job Openings</Typography>
      <Typography className="jobSubHEAD">
        Start your dream career now. Join our team of professionals.
      </Typography>
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: "#007FFF",
              dark: "#0066CC",
            },
          },
        }}
      ></ThemeProvider>
      <Box className="mainGridView">
        <Box
          className="gridLayout"
          sx={{
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #3F5EFB, #029ED8)",
            },
          }}
        >
          <Typography className="gridInsideText">Python Consultant</Typography>
          <Typography className="gridInsideSubText">Remote (India)</Typography>
          <Typography className="gridInsideSubText">Minimum 5 years</Typography>
        </Box>
        <Box
          className="gridLayout"
          sx={{
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #3F5EFB, #029ED8)",
            },
          }}
        >
          <Typography className="gridInsideText">
            Digital Marketing Executive
          </Typography>
          <Typography className="gridInsideSubText">Remote (India)</Typography>
          <Typography className="gridInsideSubText">Minimum 3 years</Typography>
        </Box>
        <Box
          className="gridLayout"
          sx={{
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #3F5EFB, #029ED8)",
            },
          }}
        >
          <Typography className="gridInsideText">Content Writer</Typography>
          <Typography className="gridInsideSubText">Remote (India)</Typography>
          <Typography className="gridInsideSubText">Minimum 2 years</Typography>
        </Box>
        <Box
          className="gridLayout"
          sx={{
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #3F5EFB, #029ED8)",
            },
          }}
        >
          <Typography className="gridInsideText">BD-Lead</Typography>
          <Typography className="gridInsideSubText">Remote (India)</Typography>
          <Typography className="gridInsideSubText">Minimum 4 years</Typography>
        </Box>
        <Box
          className="gridLayout"
          sx={{
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #3F5EFB, #029ED8)",
            },
          }}
        >
          <Typography className="gridInsideText">UX Designer</Typography>
          <Typography className="gridInsideSubText">Remote (India)</Typography>
          <Typography className="gridInsideSubText">Minimum 3 years</Typography>
        </Box>
        <Box
          className="gridLayout"
          sx={{
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #3F5EFB, #029ED8)",
            },
          }}
        >
          <Typography className="gridInsideText">Sales Manager</Typography>
          <Typography className="gridInsideSubText">Remote (India)</Typography>
          <Typography className="gridInsideSubText">Minimum 6 years</Typography>
        </Box>
      </Box>
      <Box>
        <Typography className="trustedHead">
          Trusted by individuals and teams at the world’s boldest companies
        </Typography>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img style={{ height: 40 }} src={micro}></img>
            </div>
            <div>
              <a href="your-link-here">
                <img src={accent} style={{ height: 40, width: 150 }} />
              </a>{" "}
            </div>
            <div>
              <a href="your-link-here">
                {" "}
                <img style={{ height: 40 }} src={micro}></img>
              </a>
            </div>
            <div>
              <a href="your-link-here">
                <img style={{ height: 40, width: 150 }} src={accent}></img>
              </a>
            </div>
            <div>
              <a href="your-link-here">
                {" "}
                <img style={{ height: 40, width: 150 }} src={info}></img>
              </a>
            </div>
            <div>
              <a href="your-link-here">
                {" "}
                <img style={{ height: 40 }} src={micro}></img>
              </a>
            </div>
            <div>
              <a href="your-link-here">
                {" "}
                <img style={{ height: 40, width: 150 }} src={Google}></img>
              </a>
            </div>
          </Slider>
        </div>
        <Box className="lineGrad"></Box>
      </Box>
      <Box>
        <img src={employeeImg}></img>
      </Box>
    </Box>
  );
}

Container.propTypes = {
  window: PropTypes.func,
};

export default Container;
