import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome To the Dashboard, {user.displayName}</h1>
        </div>
    );
};

export default DashBoardHome;