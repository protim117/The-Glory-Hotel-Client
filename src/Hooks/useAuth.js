import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => {
    // using AuthContext
    return (
        useContext(AuthContext)
    );
};

export default useAuth;