import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',

    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',

    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',

    }
]

const Explore = () => {
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
                            services.map(service => <Product
                                key={service.name}
                                service={service}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Explore;