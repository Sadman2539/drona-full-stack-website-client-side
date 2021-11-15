import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome To the Dashboard, {user.displayName}</h1>
            <img src="https://image.freepik.com/free-vector/social-media-specialists-manage-multiple-accounts-huge-laptop-social-media-dashboard-online-marketing-interface-social-media-metrics-concept-illustration_335657-2340.jpg" alt="" />
        </div>
    );
};

export default DashBoardHome;