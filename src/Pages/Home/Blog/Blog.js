import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Blog = (props) => {
    const { title, category, description, image, date, _id } = props.blog;
    return (
        <Grid item xs={2} sm={4} md={4} key={_id}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ mb: 2, color: "secondary.main" }}>
                        Category: {category} || Published:{date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">

                        <ScreenShareIcon />
                    </Button>
                    <Button size="small">Learn More
                        <DoubleArrowIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>



    );
};

export default Blog;