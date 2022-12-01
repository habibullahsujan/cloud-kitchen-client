import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const AdminRoute = () => {
    const {user}=useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;