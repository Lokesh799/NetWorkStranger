import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import facebook from "../images/Facebook.png";
import xlogo from "../images/xlogo.png";
import linkedln from "../images/linkedln.png";
import instalogo from "../images/instaicon.png";


function Footer() {
  return ( 
        <Box className="footer">
          <Box className="footerMain">
            <Box className="footerContenOne">
              <Typography className="footerHead">NetWorkStranger</Typography>
              <Typography className="footerSubOne">
                Experience genuine connections tailored to your ambitions.
                Engage in real, unscripted conversations with industry peers.
                Find mentors, collaborators, and friends who inspire you.
              </Typography>
              <Box className="footerIcon">
                <img src={facebook}></img>
                <img src={xlogo}></img>
                <img src={linkedln}></img>
                <img src={instalogo}></img>
              </Box>
            </Box>
            <Box>
              <Typography className="footerHead">About us</Typography>
              <Box className="footerSubHeadMain">
                <Typography className="footerSubHead">
                  Company Overview
                </Typography>
                <Typography className="footerSubHead">Key Features</Typography>
                <Typography className="footerSubHead">Our Team</Typography>
                <Typography className="footerSubHead">Careers</Typography>
                <Typography className="footerSubHead">Your Guide</Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="footerHead">Resources</Typography>
              <Box className="footerSubHeadMain">
                <Typography className="footerSubHead">
                  Membership Plans
                </Typography>
                <Typography className="footerSubHead">Blogs</Typography>
                <Typography className="footerSubHead">Latest News</Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="footerHead">Support</Typography>
              <Box className="footerSubHeadMain">
                <Typography className="footerSubHead">FAQs</Typography>
                <Typography className="footerSubHead">Contact us</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="lineGrad"></Box>
          <Box>
            <Typography className="footerEnd">
              NetWorkStranger <span>Copyright © 2023 All Rights Reserved.</span>
              <span className="dotbox"></span>
              <span>User Agreement</span>
              <span className="dotbox"></span>
              <span>Terms & Conditions</span>
              <span className="dotbox"></span>
              <span>Privacy Policy</span>
              <span className="dotbox"></span>
              <span>Community Guidelines</span>
              <span className="dotbox"></span>
              <span>Cookie Policy</span>
              <span className="dotbox"></span>
              <span>Copyright Policy</span>
            </Typography>
          </Box>
        </Box> 
  );
}
export default Footer;
