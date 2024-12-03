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
import Snackbar from '@mui/material/Snackbar';
import DeleteIcon from '@mui/icons-material/Delete';
import products from './data/Products'; // Import the external data file


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

const ProductList = ({ cart, setCart }) => {
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleAddToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      setSnackbarOpen(true); // Show feedback for adding to cart
    };

    const handleViewDetails = (product) => {
      setSelectedProduct(product);
      setOpenModal(true);
    };

    const handleCloseModal = () => {
      setOpenModal(false);
      setSelectedProduct(null);
    };

    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
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
                  sx={{ objectFit: 'contain' }}
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
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleAddToCart(product)}
                    disabled={!!cart.find((item) => item.id === product.id)}
                  >
                    {cart.find((item) => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
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

        {/* Snackbar for Add to Cart Notification */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Product added to cart!"
        />
      </div>
    );
};

export default ProductList;
