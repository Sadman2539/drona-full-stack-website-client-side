import { Button, Card, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import AddCommentIcon from '@mui/icons-material/AddComment';
const AddReview = () => {


    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, profession: '', rating: 0, comment: '', image: '' };
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    console.log(user);

    // handleOnBlur function call 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewInfo = { ...reviewInfo };
        newReviewInfo[field] = value;
        setReviewInfo(newReviewInfo);
    }

    const handleReviewSubmit = e => {
        // collect data
        const review = {
            ...reviewInfo
        }
        console.log(review);
        // send to the server

        fetch('https://pacific-earth-55330.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank you for your feedback!');
                }
            })

        e.preventDefault();
    }
    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}  >
                <Grid item xs={12} md={6} >
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '300px', margin: '0 auto' }}
                            image="https://image.freepik.com/free-vector/positive-customer-evaluation_74855-5920.jpg"
                            alt="Drone Photo"
                        />


                    </Card>

                </Grid>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>

                    <Typography variant="h5" component="div" sx={{ fontWeight: 500, m: 2, color: 'info.main' }} >
                        Please add a review
                    </Typography>
                    <form onSubmit={handleReviewSubmit}>

                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="userName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                            label="Name"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                            label="Email"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="profession"
                            onBlur={handleOnBlur}
                            defaultValue={user.profession}
                            size="small"
                            label="Profession"
                        />



                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="rating"
                            onBlur={handleOnBlur}
                            type="number"
                            label="Rating"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-multiline-flexible"
                            multiline
                            name="comment"
                            onBlur={handleOnBlur}
                            label="Review"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-multiline-flexible"
                            multiline
                            name="image"
                            onBlur={handleOnBlur}
                            label="Image Url"
                        />


                        <Button type="submit" variant="outlined" sx={{ mt: 2, color: 'success.main' }}>

                            Submit
                            <AddCommentIcon />
                        </Button>
                    </form>

                </Grid>

            </Grid>
        </Container>
    );
};

export default AddReview;