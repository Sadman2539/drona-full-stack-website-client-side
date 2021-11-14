import React from 'react';
import Grid from '@mui/material/Grid';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import bg from '../../../images/bg.png'
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';



const drone = {
    width: 'initial',
    position: 'relative',
    animation: 'ImgAnimate 3s infinite linear .2s'

};
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500'
};
const Banner = () => {
    return (

        <Container sx={{ flexGrow: 1, my: 10 }}  >
            <Grid container spacing={2} >
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" >
                            Imagine <br />
                            Above everything
                        </Typography>
                        <Typography variant="h6" sx={{ py: 5, fontSize: 13, fontWeight: '400px', color: 'gray' }}>
                            The Mavic Pro Platinum features a sleek design and compact body that is both powerful and alluring. A new and improved 30-minute flight time coupled with 60% noise power reduction makes the Mavic Pro Platinum DJI’s best portable drone yet.
                        </Typography>

                        <Link style={{ textDecoration: 'none' }} to="/explore">
                            <Button variant="outlined" size="large" sx={{

                                color: 'secondary.main',
                                fontSize: '1rem',
                                fontWeight: '700',
                            }}>
                                <VideoLibraryIcon />
                                Watch Video
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} sx={{ mt: 8 }}>
                    <img style={drone} src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/img-slider-2_800x.png?v=1613635332" alt="" />
                </Grid>
            </Grid>
        </Container >

    );
};

export default Banner;