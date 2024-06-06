import * as React from 'react';

import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Button, Tooltip, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate  } from 'react-router-dom';
import { useAppContext } from '../../state';
import { logout } from '../../state/actions';

const pages = ['Test', 'Stats'];
// const settings = ['Profile', 'Logout'];

function Navbar() {

  const [appState, dispatch] = useAppContext();
  const { currentUser } = appState;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  
  const handleCloseNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(null);
    const page = event.currentTarget.getAttribute('data-page');
    
    if(page) {
      navigate(`/${page.toLowerCase()}`);
    }
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(logout({
      value: {
        username: currentUser!.username!,
        password: currentUser!.password!,
      }
    }));
    navigate("/login");
    
  };
  
  const handleProfileMenu = () => {
    setAnchorElUser(null);
    navigate("/profile");
  };

  return (
    <AppBar 
    position="static"
    // position="sticky"

        sx={{
            margin: 0,
            marginLeft: 0,
            padding: 0,
        }}
    >
      <Container
        maxWidth="xl"
        
        sx={{
          margin: 0,
          marginLeft: 0,
          padding: 0,
      }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            display = {{ xs: 'none', md: 'flex'}}
            fontWeight={700}
            letterSpacing={'0.3rem'}
            color='inherit'
            marginRight={2}
            sx={{
              textDecoration: 'none',
            }}
          >
            Typing Speed App
          </Typography>

          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            alignItems: 'center',            
         }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                component={Link}  to={page.split(" ").join("")}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"

            display = {{ xs: 'flex', md: 'none'}}
            flexGrow={1}
            fontWeight={700}
            letterSpacing={'0.3rem'}
            color='inherit'
            marginRight={2}
            sx={{
              textDecoration: 'none',
            }}
          >
            Typing Speed App
          </Typography>
          <Box 
            display={{ xs: 'none', md: 'flex'}}
            alignItems='center'
            flexGrow={1}
          >
            {pages.map((page) => (
              <Button
                key={page}
                data-page={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2,  
                  color: 'white', 
                  display: 'block',
                  borderBottom: location.pathname === `/${page.toLowerCase()}` ? '2px solid white' : 'none',
                }}
                
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={`${currentUser?.username}`} src={`${currentUser?.avatar}`} 
                sx={{ width: 55, height: 55, background: "grey" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem key={"Profile"} onClick={handleProfileMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key={"Logout"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
