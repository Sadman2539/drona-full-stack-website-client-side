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


        <Box sx={{ flexGrow: 1, my: 8 }}>
            <Container >
                <Box sx={{ my: 4 }}>

                    <Typography variant="h4" component="div" sx={{ fontWeight: 500, mt: 5, color: "secondary.main" }}>
                        Customer Reviews
                    </Typography>
                    <Typography variant="h6" component="div" style={{ color: 'green' }} sx={{ fontWeight: 500, }} >
                        Lets hear what they say about us
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 8 }}>
                    {
                        reviews.map(review => <Review key={review._id} review={review} />)

                    }
                </Grid>

            </Container>
        </Box >


    );
};

export default Reviews;