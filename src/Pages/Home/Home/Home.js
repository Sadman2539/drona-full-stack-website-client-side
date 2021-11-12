import React from 'react';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <PhotoAlbum></PhotoAlbum>
        </div>
    );
};

export default Home;