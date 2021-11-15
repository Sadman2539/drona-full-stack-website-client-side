import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ManageProducts() {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://pacific-earth-55330.herokuapp.com/explore`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))

    }, []);

    // handleDeleteProduct function declaration 
    const handleDeleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            fetch(`https://pacific-earth-55330.herokuapp.com/explore/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setProducts(products.filter(product => product._id !== id))
                        alert('Product deleted successfully!');
                    }
                })
        }
    }

    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500, m: 2, color: 'info.main' }} >
                Manage all products here
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price </TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (<TableRow
                        key={product._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {product.productName}
                        </TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">{product.category}</TableCell>
                        <TableCell align="right"><Button onClick={() => handleDeleteProduct(product._id)} variant="outlined" color="error">
                            Delete
                            <DeleteIcon />
                        </Button></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ManageProducts;