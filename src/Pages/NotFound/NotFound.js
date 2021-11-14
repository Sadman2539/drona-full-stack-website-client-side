import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
    return (
        <div>
            <img src="https://media.giphy.com/media/3o7btLwXyvQZqQqQiQ/giphy.gif" alt="404" /> <br />
            <Link style={{ textDecoration: 'none' }} to="/home">
                <Button color="inherit">
                    <ArrowBackIcon />
                    Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;