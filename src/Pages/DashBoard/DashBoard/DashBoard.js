import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Orders from '../Orders/Orders';
import { Button } from '@mui/material';
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AddReview from "../AddReview/AddReview";
import Payment from "../Payment/Payment";
import { IconButton } from "@material-ui/core";

const drawerWidth = 200;

function DashBoard(props) {
    const { admin, user, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { path, url } = useRouteMatch();
    const drawer = (

        <>
            <Toolbar />
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">
                <Button color="inherit" style={{ padding: 10 }}>
                    <HomeIcon />
                    Home</Button>
            </Link>



            <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                <DashboardCustomizeIcon color="white" />
                Dashboard</Button></Link>

            {
                admin ? <Box>
                    <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                        <ManageAccountsIcon />
                        Manage All Orders</Button></Link>
                    <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                        <AddCircleOutlineIcon />
                        Add Product</Button></Link>
                    <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                        <ShoppingBasketIcon />
                        Manage Products</Button></Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                        <PersonAddIcon />
                        Make Admin</Button></Link>

                </Box>
                    :
                    <Box>
                        <Link to={`${url}/orders`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                            <ReorderIcon />
                            My Orders</Button></Link>
                        <Link to={`${url}/payment`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                            <PaymentIcon />
                            Payment</Button></Link>
                        <Link to={`${url}/addReview`} style={{ textDecoration: 'none', color: 'black' }}><Button color="inherit" style={{ padding: 10 }}>
                            <RateReviewIcon />
                            Review</Button></Link>

                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}><Button onClick={logout} style={{ textDecoration: 'none', color: "inherit", padding: 10 }}>
                            <LogoutIcon />
                            LogOut

                        </Button></Link>
                    </Box>
            }




        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"

                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome ></DashBoardHome>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Orders></Orders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>


                </Switch>
            </Box>
        </Box >
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
