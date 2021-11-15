import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    // import auth functions 
    const { authError, token } = useAuth();


    const handleOnBlur = e => {

        setEmail(e.target.value);

    }
    //  handleAdminSubmit function declaration
    const handleAdminSubmit = e => {

        const user = { email };
        fetch('https://pacific-earth-55330.herokuapp.com/users/admin', {

            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // setEmail('');
                    setAdminSuccess(true);

                }
                else {
                    setAdminSuccess(false);
                    alert('Already added as admin!');
                }
            })


        e.preventDefault();
    };


    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ mt: 8 }}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 400 }} src="https://image.freepik.com/free-vector/male-businessman-character-sitting-office-workplace-computer-monitor-desk_80328-218.jpg" alt="" />


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