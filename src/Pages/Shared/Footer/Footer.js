import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Footer.css'
import { Container, Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <Container>
                <Box sx={{ flexGrow: 1, py: 3 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={2} sm={4} md={4} >
                            <Typography variant="h5" component="h2">
                                Drona : A website for Drone Lovers
                            </Typography>
                            <Typography variant="subtitle2" component="h2">
                                Drona is a drone selling shop where we provide the best drones in the market with the reasonable price for our customers.
                            </Typography>

                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                            <Typography variant="h6" component="h2">
                                Subscribe to get monthly newsletters
                            </Typography>
                            <TextField
                                id="outlined-basic "
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                inputProps={{ style: { color: 'white' } }}
                                focused
                            />
                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                                <HomeIcon />
                                Home
                            </Link> <br />
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore" >
                                <AddToPhotosIcon color="white" />
                                Explore
                            </Link><br />
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="dashboard">
                                <DashboardCustomizeIcon color="inherit" />
                                Dash-Board
                            </Link>

                        </Grid>

                    </Grid>
                    <Typography variant="body1" component="h2">
                        Drona: <CopyrightIcon /> All Rights Reserved - 2021 |  Made With <FavoriteIcon /> by Sadman Sakib
                    </Typography>
                </Box>

            </Container>

        </div >


    );
};

export default Footer;