// import { CircularProgress } from '@mui/material';
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const AdminRoute = ({ children, ...rest }) => {
//     const { user, admin, loading } = useAuth();
//     const location = useLocation();

//     if (loading || !admin) {
//         return <CircularProgress sx={{ mt: 20 }} />
//     };
//     if (user.email && admin) {
//         return children;
//     }
//     else {
//         return <Navigate to="/login" state={{ from: location }} />
//     }

// };

// export default AdminRoute;