import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Paper, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';




const Review = (props) => {
    const { name, profession, image, comment, rating, _id } = props.review;

    return (
        <Grid item xs={2} sm={4} md={4} key={_id}>
            <Card sx={{ maxWidth: 345, border: 0 }}>

                <CardMedia
                    component="img"
                    width="100"
                    height="100"
                    borderRadius="50%"
                    image={image}
                    alt="User Photo"
                />



                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {name}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />

                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                </CardContent>


            </Card>
        </Grid>

    );

}

export default Review;