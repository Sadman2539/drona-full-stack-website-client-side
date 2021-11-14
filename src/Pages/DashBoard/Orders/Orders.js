
import useAuth from '../../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';

function Orders() {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://pacific-earth-55330.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .then(console.log(orders))

    }, []);

    // handleDeleteOrder function declaration 
    const handleDeleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            fetch(`https://pacific-earth-55330.herokuapp.com/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setOrders(orders.filter(order => order._id !== id))
                        alert('Order deleted successfully');
                    }
                })
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((product) => (<TableRow
                        key={product._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {product.productName}
                        </TableCell>
                        <TableCell align="right">{product.productPrice}</TableCell>
                        <TableCell align="right">{product.productRating}</TableCell>
                        <TableCell align="right"><Button onClick={() => handleDeleteOrder(product._id)} variant="outlined" color="error">
                            Delete
                        </Button></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Orders;