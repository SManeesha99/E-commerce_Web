import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
  Box,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$20.00',
    description: 'This is a detailed description of Product 1.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$30.00',
    description: 'This is a detailed description of Product 2.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$40.00',
    description: 'This is a detailed description of Product 3.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$50.00',
    description: 'This is a detailed description of Product 4.',
    image: 'https://via.placeholder.com/150',
  },
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert('Product added to cart!');
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const toggleCartDrawer = (open) => {
    setCartDrawerOpen(open);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product Display
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {product.description.slice(0, 50)}...
                </Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleViewDetails(product)}>
                  View Details
                </Button>
                <Button size="small" color="secondary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Product Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          {selectedProduct && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedProduct.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {selectedProduct.price}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseModal}
                style={{ marginTop: 20 }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Floating Cart Icon */}
      <Badge
        badgeContent={cart.length}
        color="secondary"
        style={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => toggleCartDrawer(true)}
          startIcon={<ShoppingCartIcon />}
        >
          View Cart
        </Button>
      </Badge>

      {/* Cart Drawer */}
      <Drawer anchor="right" open={cartDrawerOpen} onClose={() => toggleCartDrawer(false)}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Your Cart
          </Typography>
          <Divider />
          <List>
            {cart.length > 0 ? (
              cart.map((item) => (
                <ListItem key={item.id} secondaryAction={
                  <IconButton edge="end" onClick={() => handleRemoveFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }>
                    <ListItemText
                        primary={item.name}
                        secondary={`Price: ${item.price}`}
                    />
                </ListItem>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                Your cart is empty.
              </Typography>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default ProductList;