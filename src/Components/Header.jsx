import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button, ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
   }
  },
});

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    underline:'none'
    
    
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    underline:'none'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    
  },
  header:{
    minHeight:'1%',
    backgroundColor:"#036538",
    opacity:"0.9"
  },
 
    
  hero: {
    backgroundImage: `url('https://i.imgur.com/9gY6W36.jpg')`,
    backgroundPosition:'left center',
    paddingTop:'4.5%',
    backgroundSize:'13%',
    width:'100%',
    backgroundRepeat:'no-repeat',
    color: "#fff",
    fontSize: "4rem",
    
  },
}));

export default function Header() {
  const classes = useStyles();
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      
    >
      <Link to= './' style={{textDecorationLine:'none',}}>
            <Button disableRipple>
              Home
            </Button>
          </Link>
          <Link to= './Rates' style={{textDecorationLine:'none'}}>
            <Button disableRipple>
              Rates
            </Button>
          </Link>
          <Link to= './Rules' style={{textDecorationLine:'none'}}>
            <Button disableRipple>
              Rules
            </Button>
          </Link>
          <Link to= './proshop' style={{textDecorationLine:'none'}}>
            <Button disableRipple>
              ProShop
            </Button>
          </Link>
          <Link to= './contact' style={{textDecorationLine:'none'}}>
            <Button disableRipple>
              Contact 
            </Button>
          </Link> 
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.grow}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
        <Box className={classes.hero}>
        </Box>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link to= './' style={{textDecorationLine:'none'}}>
            <Button disableRipple color='primary'>
              Home
            </Button>
          </Link>
          <Link to= './Rates' style={{textDecorationLine:'none'}}>
            <Button disableRipple color='primary'>
              Rates
            </Button>
          </Link>
          <Link to= './Rules' style={{textDecorationLine:'none'}}>
            <Button disableRipple color='primary'>
              Rules
            </Button>
          </Link>
          <Link to= './proshop' style={{textDecorationLine:'none'}}>
            <Button disableRipple color='primary' >
              ProShop
            </Button>
          </Link>
          <Link to= './contact' style={{textDecorationLine:'none'}}>
            <Button disableRipple color='primary'>
              Contact 
            </Button>
          </Link> 
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu} 
    </div>
    </ThemeProvider>
  );
}