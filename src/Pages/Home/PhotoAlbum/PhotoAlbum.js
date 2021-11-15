import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@material-ui/core';
export default function PhotoAlbum() {
    return (
        <>
            <Typography variant="h3" gutterBottom>
                Photo taken from Drones
            </Typography>
            <ImageList sx={{ width: '100%', height: 500 }} cols={3} rowHeight={200}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

const itemData = [
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/32_7e65ad49-8d39-42b3-87ac-6d113f664aaa_1200x.jpg?v=1563522227',
        title: 'Breakfast',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/33_d3bf0da9-5497-4495-bc6a-cad4a42e224b_1200x.jpg?v=1563522243',
        title: 'Burger',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/34_03e63c23-d80f-4373-aca7-dcb726d0eac5_1200x.jpg?v=1563522251',
        title: 'Camera',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/35_144c4303-777d-4384-85b1-739893c8f93d_1200x.jpg?v=1563522258',
        title: 'Coffee',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/34_03e63c23-d80f-4373-aca7-dcb726d0eac5_1200x.jpg?v=1563522251',
        title: 'Hats',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/36_10d45264-bd2a-432d-b9e6-0826c831fa74_1200x.jpg?v=1563522265',
        title: 'Honey',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/37_647d241c-e634-41a7-9cce-2945830d43ab_1200x.jpg?v=1563522273',
        title: 'Basketball',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/33_d3bf0da9-5497-4495-bc6a-cad4a42e224b_1200x.jpg?v=1563522243',
        title: 'Fern',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/32_7e65ad49-8d39-42b3-87ac-6d113f664aaa_1200x.jpg?v=1563522227',
        title: 'Mushrooms',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/34_03e63c23-d80f-4373-aca7-dcb726d0eac5_1200x.jpg?v=1563522251',
        title: 'Tomato basil',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/33_d3bf0da9-5497-4495-bc6a-cad4a42e224b_1200x.jpg?v=1563522243',
    },
    {
        img: 'https://cdn.shopify.com/s/files/1/0074/2126/3962/files/32_7e65ad49-8d39-42b3-87ac-6d113f664aaa_1200x.jpg?v=1563522227',
        title: 'Bike',
    },
];
