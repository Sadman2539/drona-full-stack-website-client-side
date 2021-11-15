import React from 'react';
import Grid from '@mui/material/Grid';
import { Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';





const Review = (props) => {
    const { userName, profession, image, comment, rating, _id } = props.review;

    return (
        <Grid item xs={12} sm={4} md={4} key={_id}>
            <Card sx={{ maxWidth: 345, border: 0 }}>

                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                    image={image}
                    alt="User Photo"
                />



                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {profession}
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