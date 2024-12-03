import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions, CardHeader } from '@mui/material';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: '$20.00', description: 'Best for your daily needs', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', price: '$35.00', description: 'Comfort and style combined', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', price: '$40.00', description: 'A product for every occasion', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Product 4', price: '$50.00', description: 'The ultimate experience', image: 'https://via.placeholder.com/300' },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url(https://via.placeholder.com/1920x1080?text=Welcome+to+Our+Store)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Discover Amazing Products!
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 3 }} size="large">
          Shop Now
        </Button>
      </Box>

      {/* Advertisement Banner */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 4, mt: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold">
                Special Offer: Get 20% off on all Products!
              </Typography>
              <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>
                Shop Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://via.placeholder.com/600x300?text=Special+Offer"
                alt="Special Offer"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Product List Section */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%' }}>
                <CardHeader
                  title={product.name}
                  subheader={product.price}
                  titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  subheaderTypographyProps={{ variant: 'body1', color: 'primary' }}
                />
                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" fullWidth>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
