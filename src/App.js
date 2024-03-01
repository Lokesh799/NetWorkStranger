import * as React from "react";
import "./App.css";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import mncimage from "./images/mnc.png";
import employeeImg from "./images/employee.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";
const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header></Header>
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
        </Box>
        <Box style={{ maxWidth: 1280, margin: "80px auto 0px" }}>
          <Typography className="jobHeading">Latest Job Openings</Typography>
          <Typography className="jobSubHEAD">
            Start your dream career now. Join our team of professionals.
          </Typography>
          <Box className="mainGridView">
            <Box className="gridLayout">
              <Typography className="gridInsideText">
                Python Consultant
              </Typography>
              <Typography className="gridInsideSubText">
                Remote (India)
              </Typography>
              <Typography className="gridInsideSubText">
                Minimum 5 years
              </Typography>
            </Box>
            <Box className="gridLayout">
              <Typography className="gridInsideText">
                Digital Marketing Executive
              </Typography>
              <Typography className="gridInsideSubText">
                Remote (India)
              </Typography>
              <Typography className="gridInsideSubText">
                Minimum 3 years
              </Typography>
            </Box>
            <Box className="gridLayout">
              <Typography className="gridInsideText">Content Writer</Typography>
              <Typography className="gridInsideSubText">
                Remote (India)
              </Typography>
              <Typography className="gridInsideSubText">
                Minimum 2 years
              </Typography>
            </Box>
            <Box className="gridLayout">
              <Typography className="gridInsideText">BD-Lead</Typography>
              <Typography className="gridInsideSubText">
                Remote (India)
              </Typography>
              <Typography className="gridInsideSubText">
                Minimum 4 years
              </Typography>
            </Box>
            <Box className="gridLayout">
              <Typography className="gridInsideText">UX Designer</Typography>
              <Typography className="gridInsideSubText">
                Remote (India)
              </Typography>
              <Typography className="gridInsideSubText">
                Minimum 3 years
              </Typography>
            </Box>
            <Box className="gridLayout">
              <Typography className="gridInsideText">Sales Manager</Typography>
              <Typography className="gridInsideSubText">
                Remote (India)
              </Typography>
              <Typography className="gridInsideSubText">
                Minimum 6 years
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className="trustedHead">
              Trusted by individuals and teams at the world’s boldest companies
            </Typography>
            <img className="mncImage" src={mncimage} />
            <Box className="lineGrad"></Box>
          </Box>
          <Box>
            <img src={employeeImg}></img>
          </Box>
        </Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
