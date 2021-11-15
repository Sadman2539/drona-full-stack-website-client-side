import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import { Button } from '@material-ui/core';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';


const Products = () => {
    // useState for products 
    const [products, setProducts] = useState([]);

    // useEffect for products 
    useEffect(() => {
        fetch('https://pacific-earth-55330.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <Box sx={{ flexGrow: 1, py: 10 }}>
            <Container style={{ marginBottom: '30px' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 500 }}>
                    Featured Products
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500, py: 4, color: 'success.main' }} >
                    Latest drones in market
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.id}
                            service={product}
                        ></Product>)
                    }
                </Grid>


            </Container>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                <Button variant="outlined" size="large" >

                    Explore More
                    <DoubleArrowIcon sx={{ ml: 2 }} />
                </Button>

            </Link>

        </Box>


    );
};

export default Products;