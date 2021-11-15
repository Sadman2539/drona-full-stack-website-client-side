import { Button, Card, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { Grid } from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Purchase = () => {
    const [product, setProduct] = useState([]);
    const { purchaseId } = useParams();

    const { user } = useAuth();
    const initialInfo = { productName: product.name, productPrice: product.price, userName: user.displayName, email: user.email, phone: '', address: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    useEffect(() => {
        fetch(`https://pacific-earth-55330.herokuapp.com/purchase/${purchaseId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    // handleOnBlur function call 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPurchaseInfo = { ...purchaseInfo };
        newPurchaseInfo[field] = value;
        setPurchaseInfo(newPurchaseInfo);
    }
    // console.log(user.displayName);

    // console.log(user.displayName);
    const handlePurchaseSubmit = e => {
        // collect data
        const purchase = {
            ...purchaseInfo,
            productName: product.name,
            productPrice: product.price,
            productRating: product.rating,
        }
        console.log(purchase);
        // send to the server

        fetch('https://pacific-earth-55330.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order has been placed successfully');
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
                            style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                            image={product.image}
                            alt="Drone Photo"
                        />
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Model: {product.name}
                            </Typography>

                            <Typography variant="h6">
                                Price: {product.price}
                            </Typography>
                            <Typography variant="h6">
                                Rating: {product.rating}
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 3 }}>
                                {product.description}
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>

                    <Typography id="transition-modal-title" variant="h6" component="h2">

                    </Typography>
                    <form onSubmit={handlePurchaseSubmit}>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-disabled"
                            disabled
                            name="productName"
                            label={product.name}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-disabled"
                            disabled
                            name="productPrice"
                            label={product.price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="userName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />


                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="address"
                            onBlur={handleOnBlur}
                            defaultValue="Address"
                            size="small"
                        />

                        <Button type="submit" variant="contained" sx={{ mt: 2 }}>BUY</Button>
                    </form>
                </Grid>

            </Grid>
            <Link style={{ textDecoration: 'none' }} to="/home">
                <Button color="inherit" variant="outlined">
                    <ArrowBackIcon />
                    Home</Button>
            </Link>
        </Container>
    );
};

export default Purchase;