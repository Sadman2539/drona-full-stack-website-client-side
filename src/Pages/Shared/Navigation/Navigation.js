import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import HomeIcon from '@mui/icons-material/Home';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                bgcolor: 'text.primary',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '700',
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link style={{
                        textDecoration: 'none', color: 'white'
                    }} to="/">
                        <Button color="inherit">Drona</Button>
                    </Link>


                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit">
                            <HomeIcon color="white" />
                            Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                        <Button color="inherit">
                            <AddToPhotosIcon color="white" />
                            Explore</Button>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {
                            !user.displayName ?
                                <div>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <Button variant="outlined" color="success" >
                                            <LoginIcon />
                                            Login</Button>
                                    </Link>
                                </div> :
                                <>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">
                                            <DashboardCustomizeIcon color="white" />
                                            DashBoard</Button>
                                    </Link>

                                    < Typography sx={{ mx: 3 }}>
                                        <PersonIcon color="white" sx={{ pr: 2 }} />
                                        Hello, {user.displayName}!</Typography>
                                    <Button onClick={logout} variant="outlined" style={{ color: "primary.main" }}>
                                        <LogoutIcon />
                                        Log Out

                                    </Button>
                                </>

                        }
                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;