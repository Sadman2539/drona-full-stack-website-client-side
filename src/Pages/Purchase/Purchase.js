import { Button, Card, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';
import Products from '../Home/Products/Products';
import { useParams } from 'react-router';
import { Grid } from '@material-ui/core';
import CardContent from '@mui/material/CardContent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Purchase = () => {
    const [product, setProduct] = useState([]);
    const { _id } = useParams();
    const { price, name, description, image, rating } = Products;

    useEffect(() => {
        fetch(`https://pacific-earth-55330.herokuapp.com/purchase/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, phone: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

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
            price,
            productName: name,
            rating
        }
        console.log(purchase);
        //send to the server

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setBookingSuccess(true);
                    alert('Your order has been placed successfully');
                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 8 }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '100px', margin: '0 auto' }}
                            image={image}
                            alt="Drone Photo"
                        />
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Model: {product.name}
                            </Typography>

                            <Typography variant="body2">
                                Price: {product.price}
                            </Typography>
                            <Typography variant="body2">
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
        </Container>
    );
};

export default Purchase;