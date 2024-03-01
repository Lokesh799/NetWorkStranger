import * as React from "react";
import "./App.css";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import SimpleSlider from './components/Slider'

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header/>
      <Box
        className="headingbox"
        component="main"
        style={{ marginTop: "180px", width: "100%" }}
      >
        <SimpleSlider/>
      <Container/>
        <Footer/>
      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
