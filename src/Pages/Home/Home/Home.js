import React from 'react';
import Products from '../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;