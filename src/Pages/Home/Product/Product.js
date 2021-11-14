import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Product = (props) => {
    const { name, description, image, _id, price } = props.service;
    return (
        <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minWidth: 275, borderRadius: 5, boxShadow: 5 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: '0 auto' }}
                    image={image}
                    alt="Drone Photo"
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        Model: {name}
                    </Typography>

                    <Typography variant="h6">
                        Price: ${price}
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 3 }}>
                        {description}
                    </Typography>
                    <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}>
                        <Button variant="contained" >
                            <ShoppingCartIcon />
                            Purchase Now</Button>
                    </NavLink>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Product;