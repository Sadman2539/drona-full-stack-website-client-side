import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';



const Explore = () => {
    const [products, setProducts] = useState([]);

    // load products from the server
    useEffect(() => {
        fetch('https://pacific-earth-55330.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Typography variant="h4" component="div" sx={{ fontWeight: 500, m: 5 }}>
                        Featured Products
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 500, m: 2, color: 'success.main' }} >
                        Latest drones in market
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Product
                                key={product._id}
                                service={product}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Explore;