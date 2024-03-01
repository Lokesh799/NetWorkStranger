import * as React from "react";
import "../App.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "linear-gradient(270deg, #029ED8 0%, #3F5EFB 99.97%)",
        }}
      >
        NetWorkStranger
      </Typography>
      <Divider />
      <List>
        <ListItem className="sidebarnav" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "white",
          boxShadow: "unset",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
        }}
      >
        <Toolbar
          style={{
            maxWidth: 1280,
            margin: "auto",
            width: "100%",
            padding: "10px 0px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "black", pl: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="logo_text"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              color: "linear-gradient(270deg, #029ED8 0%, #3F5EFB 99.97%)",
            }}
          >
            NetWorkStranger
          </Typography>
          <Box
            className="navbar-box"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Button sx={{ color: "#000" }}>
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.2797 6.70508L8.93306 11.0517C8.41973 11.5651 7.57973 11.5651 7.06639 11.0517L2.71973 6.70508"
                  stroke="#1E1E1E"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button sx={{ color: "#000" }}>
              Platform Usage
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.2797 6.70508L8.93306 11.0517C8.41973 11.5651 7.57973 11.5651 7.06639 11.0517L2.71973 6.70508"
                  stroke="#1E1E1E"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button sx={{ color: "#000" }}>Membership Plans</Button>
            <Button sx={{ color: "#000" }}>Blogs</Button>
            <Button sx={{ color: "#000" }}>
              Support
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.2797 6.70508L8.93306 11.0517C8.41973 11.5651 7.57973 11.5651 7.06639 11.0517L2.71973 6.70508"
                  stroke="#1E1E1E"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button variant="outlined" sx={{ color: "#fff", borderRadius: 16 }}>
              Login
            </Button>
            <Button className="started-btn" variant="contained">
              Get Started for Free
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        className="headingbox"
        component="main"
        style={{ marginTop: "180px", width: "100%" }}
      >  
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
