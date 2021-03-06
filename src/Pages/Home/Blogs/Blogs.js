import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Blog from '../Blog/Blog';






const Blogs = () => {
    // useState for products 
    const [blogs, setBlogs] = useState([]);

    // useEffect for products 
    useEffect(() => {
        fetch('https://pacific-earth-55330.herokuapp.com/Blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container >
                <Typography variant="h4" component="div" sx={{ fontWeight: 500, my: 3, color: "secondary.main" }}>
                    Latest Blogs
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog} />)

                    }

                </Grid>
            </Container >
        </Box>

    );

};
export default Blogs;