import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import admin from '../../../images/admin.jpg'

const MakeAdmin = () => {
    const [isLoading] = useState({});
    const [email, setEmail] = useState('{}');
    const [adminSuccess, setAdminSuccess] = useState(false);

    // import auth functions 
    const { user, loginUser, authError } = useAuth();


    const handleOnBlur = e => {

        setEmail(e.target.value);

    }
    //  handleAdminSubmit function declaration
    const handleAdminSubmit = e => {


        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setAdminSuccess(true);

                }
            })


        e.preventDefault();
    };


    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ mt: 8 }}>
                    <Grid item xs={12} md={6}>
                        <img src={admin} alt="" />


                    </Grid>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>

                        <Typography variant="h5" component="div" sx={{ fontWeight: 500, m: 2, color: 'info.main' }} >
                            Make An Admin
                        </Typography>


                        <form onSubmit={handleAdminSubmit}>

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-basic"
                                label="Email*"
                                variant="outlined"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur} />


                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Submit </Button>



                            {
                                adminSuccess && <Alert severity="success">Admin Added Successfully!</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                        </form>




                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default MakeAdmin;