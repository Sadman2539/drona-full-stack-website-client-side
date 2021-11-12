import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginSLider from '../../Shared/LoginSlider/LoginSlider';

const Register = () => {
    const [registerData, setRegisterData] = useState({});

    const history = useHistory();
    // import auth functions 
    const { user, registerUser, isLoading, authError } = useAuth();

    // handleOnBlur function call 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);

    }
    const registerHandle = e => {
        if (registerData.password !== registerData.confirmPassword) {
            alert("Password didn't match!")
            return;
        }
        // registerUser function call 

        registerUser(registerData?.email, registerData?.password, registerData?.name, history);
        e.preventDefault();
        // alert("Registration Successful!")
    };
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 8 }}>
                <Grid item xs={12} md={6}>
                    <img src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    {/* <LoginSLider></LoginSLider> */}

                </Grid>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>

                    <Typography variant="h5" component="div" sx={{ fontWeight: 500, m: 2, color: 'info.main' }} >
                        Register
                    </Typography>

                    {!isLoading && <form onSubmit={registerHandle}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            variant="outlined"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            name="confirmPassword"
                            onBlur={handleOnBlur}
                        />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Register </Button>
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                            <Button variant="text">Already Registered? Please Login </Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success" >Congratulations! Registration Successful!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>}



                </Grid>

            </Grid>
        </Container>


    );
};

export default Register;