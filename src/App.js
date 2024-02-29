import * as React from 'react';
import './App.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NetWorkStranger
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>About us</ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>About us</ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>About us</ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>About us</ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>About us</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{background: 'white', boxShadow: 'unset', maxWidth: 1280, margin: 'auto', left: '50%', transform: 'translateX(-50%)', top: 23}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className='logo_text'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, color: 'linear-gradient(270deg, #029ED8 0%, #3F5EFB 99.97%)' }}
          >
            NetWorkStranger
          </Typography>
          <Box className="navbar-box" sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button sx={{ color: '#000' }}>
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M13.2797 6.70508L8.93306 11.0517C8.41973 11.5651 7.57973 11.5651 7.06639 11.0517L2.71973 6.70508" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
            <Button sx={{ color: '#000' }}>
              Platform Usage
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M13.2797 6.70508L8.93306 11.0517C8.41973 11.5651 7.57973 11.5651 7.06639 11.0517L2.71973 6.70508" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
            <Button sx={{ color: '#000' }}>
              Membership Plans
            </Button>
            <Button sx={{ color: '#000' }}>
              Blogs
            </Button>
            <Button sx={{ color: '#000' }}>
              Support
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M13.2797 6.70508L8.93306 11.0517C8.41973 11.5651 7.57973 11.5651 7.06639 11.0517L2.71973 6.70508" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
            <Button variant='outlined' sx={{ color: '#fff', borderRadius: 16 }}>
              Login
            </Button>
            <Button className='started-btn' variant='contained'>
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" style={{marginTop: '180px', width: '100%'}}>
        <Box className="main-box">
          <Typography className='heading-text'>Explore Your Future with</Typography>
          <Typography
            variant="h2"
            component="div"
            className='logo_text heading-text2'
            sx={{color: 'linear-gradient(270deg, #029ED8 0%, #3F5EFB 99.97%)' }}
          >
            NetWorkStranger
          </Typography>
          <Typography className='heading-content'>We believe in the power of connections and the unlimited potential they hold. As we continue to redefine the future of professional networking, we're on the lookout for talented individuals who share our passion for innovation. Explore exciting career opportunities with us, where your skills meet cutting-edge technology.</Typography>
        </Box>
        <Box className="black-box">
          <Box className="inner-black-box main-box">
            <Typography className='first-black-component'>How is Life at</Typography>
            <Typography className='second-black-component'>NetWorkStrangers</Typography>
            <Typography className='third-black-component'>At NetWorkStranger, we don't just build connections; we build a culture of excellence. Join a workplace where innovation meets collaboration, and every idea has the potential to make a difference. Discover a vibrant atmosphere that encourages growth, values diversity, and celebrates success.</Typography>
            <Typography className='third-black-component'>Here, work isn't just a task; it's a journey of exploration, learning, and accomplishment. Dive into a culture that nurtures creativity, fosters teamwork, and empowers you to reach new heights. Life at NetWorkStranger is more than a job; it's an adventure of endless possibilities.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
