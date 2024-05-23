import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const SingleProductPage = ({ productTitle, productDescription, productPrice, productRating, images, productBrand, productStock, productCategory }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} style={{ color: '#FFD700' }} />);
    }
    return stars;
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ p: 2, border: '1px solid #ccc' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={images[selectedImageIndex]} alt={productTitle} style={{ width: '100%' }} />
              {images && images.length > 0 && (
                <Grid container spacing={2}>
                  {images.map((image, index) => (
                    <Grid item key={index} xs={3}>
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        style={{ width: '100%', cursor: 'pointer' }}
                        onClick={() => handleImageClick(index)}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h4" gutterBottom>{productTitle}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>Description: {productDescription}</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Rating: {renderStars(productRating)} ({productRating})
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>Price: ${productPrice}</Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>Brand: {productBrand}</Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>Stock: {productStock}</Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>Category: {productCategory}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Button variant="contained" color="primary" onClick={decrementQuantity}>-</Button>
                <Typography variant="subtitle1" sx={{ mx: 1 }}>{quantity}</Typography>
                <Button variant="contained" color="primary" onClick={incrementQuantity}>+</Button>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>Add to Cart</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SingleProductPage;
