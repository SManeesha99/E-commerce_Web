import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions, CardHeader } from '@mui/material';
import Ads from './Assets/ads.jpg';
import Back from './Assets/background.jpg';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
    {
        id: 1,
        name: 'Fjallraven',
        price: '$20.00',
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      {
        id: 2,
        name: 'Mens Casual ',
        price: '$30.00',
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      },
      {
        id: 3,
        name: 'Mens Cotton Jacket',
        price: '$40.00',
        description: '"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      },
      {
          id: 4,
          name: 'Mens Casual Slim Fit',
          price: '$50.00',
          description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
          image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `url(${Back})`,
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
            <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                    Shop Now
            </Link>
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
              <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}><Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                Shop Now
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
            <img
                    src={Ads}
                    // alt="Special Offer"
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
