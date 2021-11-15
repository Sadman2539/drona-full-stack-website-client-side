import React from 'react';
import Products from '../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <PhotoAlbum></PhotoAlbum>
            <Footer></Footer>
        </div>
    );
};

export default Home;