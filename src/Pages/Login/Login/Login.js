import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginSlider from '../../Shared/LoginSlider/LoginSlider';



const Login = () => {
    const [loginData, setLoginData] = useState({});

    // import auth functions 
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // login handle function 
    const loginHandle = e => {
        // loginUser function call 
        loginUser(loginData?.email, loginData?.password, location, history);
        e.preventDefault();
    };

    // handleGoogleSignIn function declaration 
    const handleGoogleSignIn = () => {
        // signInWithGoogle function call 
        signInWithGoogle(location, history);
    }
    return (

        <Container>
            <Grid container spacing={2} sx={{ mt: 8 }}>
                <Grid item xs={12} md={6}>
                    <img src="https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    {/* <LoginSlider></LoginSlider> */}

                </Grid>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>

                    <Typography variant="h5" component="div" sx={{ fontWeight: 500, m: 2, color: 'info.main' }} >
                        Login
                    </Typography>

                    {<form onSubmit={loginHandle}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Email*"
                            variant="outlined"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Password*"
                            type="password"
                            variant="outlined"
                            name="password"
                            onBlur={handleOnBlur}
                        />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Login </Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register </Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {
                            user.email && <Alert severity="success">Login Successful!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>}
                    <p>--------------------------  OR  --------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Login with Google</Button>

                </Grid>

            </Grid>
        </Container>

    );
};

export default Login;