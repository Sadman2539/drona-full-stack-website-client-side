import { Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    // useState for reviews 
    const [reviews, setReviews] = useState([]);

    // useEffect for products 
    useEffect(() => {
        fetch('https://pacific-earth-55330.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (


        <Box sx={{ flexGrow: 1, py: 8 }}>
            <Container >
                <Typography variant="h4" component="div" sx={{ fontWeight: 500, py: 5, color: "secondary.main" }}>
                    Customer Reviews
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontWeight: 500, py: 2, color: 'success.main' }} >
                    Lets hear what they say about us
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review key={review._id} review={review} />)

                    }
                </Grid>

            </Container>
        </Box>


    );
};

export default Reviews;