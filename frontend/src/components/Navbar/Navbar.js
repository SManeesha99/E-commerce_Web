import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ecommerce
        </Typography>
        <Box>
          {isAuthenticated ? (
            <>
              <Button component={Link} to="/home" color="inherit">
                Home
              </Button>
                <Button component={Link} to="/products" color="inherit">
                    Products
                </Button>
              <Button component={Link} to="/cart" color="inherit">
                Cart
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
