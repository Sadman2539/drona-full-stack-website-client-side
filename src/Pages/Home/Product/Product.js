import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { name, description, image, _id, price } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
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

                    <Typography variant="body2">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <NavLink to={`/purchase/${_id}`}>
                        <button className="regular-btn">Purchase Now</button>
                    </NavLink>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Product;