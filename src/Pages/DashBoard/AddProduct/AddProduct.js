import { Button, Card, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const AddProduct = () => {

    const [productInfo, setProductInfo] = useState({});


    // handleOnBlur function call 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductInfo = { ...productInfo };
        newProductInfo[field] = value;
        setProductInfo(newProductInfo);
    }

    const handleAddProduct = e => {
        // collect data
        const product = {
            ...productInfo
        }
        // console.log(product);
        // send to the server

        fetch('https://pacific-earth-55330.herokuapp.com/explore', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully!');
                }
            })

        e.preventDefault();
    }
    return (
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}  >
                <Grid item xs={12} md={6} >
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '300px', margin: '0 auto' }}
                            image="https://image.freepik.com/free-vector/happy-father-with-daughter-playing-with-quadcopter_74855-15436.jpg"
                            alt="Drone Photo"
                        />


                    </Card>

                </Grid>
                <Grid item xs={12} md={6}>

                    <Typography variant="h5" component="div" sx={{ fontWeight: 500, m: 2, color: 'info.main' }} >
                        Please add a product
                    </Typography>
                    <form onSubmit={handleAddProduct}>

                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="productName"
                            onBlur={handleOnBlur}
                            label="Product Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="price"
                            onBlur={handleOnBlur}
                            size="small"
                            label="Price"
                            type="number"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="standard-size-normal"
                            name="category"
                            onBlur={handleOnBlur}
                            size="small"
                            label="Category"
                        />



                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="rating"
                            onBlur={handleOnBlur}
                            type="number"
                            label="Rating"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-multiline-flexible"
                            multiline
                            name="description"
                            onBlur={handleOnBlur}
                            label="Product Details"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-multiline-flexible"
                            multiline
                            name="image"
                            onBlur={handleOnBlur}
                            label="Image Url"
                        />


                        <Button type="submit" variant="outlined" sx={{ mt: 2, color: 'success.main' }}>
                            <AddCircleOutlineIcon />
                            Add </Button>
                    </form>

                </Grid>

            </Grid>
        </Container>
    );
};

export default AddProduct;