import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Divider, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productId, change) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + change } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cart.length === 0 ? (
          <Typography>No items in the cart</Typography>
        ) : (
          cart.map((item) => (
            <ListItem key={item.id} secondaryAction={
              <IconButton edge="end" onClick={() => handleRemoveFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            }>
              <ListItemText
                primary={item.name}
                secondary={`Price: ${item.price} x ${item.quantity}`}
              />
              <Button onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
              <Button onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
            </ListItem>
          ))
        )}
      </List>
      <Divider />
      <Typography variant="h6" gutterBottom>
        Total: ${calculateTotal().toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
