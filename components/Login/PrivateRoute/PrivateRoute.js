// import { CircularProgress } from '@mui/material';
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';



// const PrivateRoute = ({ children, ...rest }) => {
//     let { user, loading } = useAuth();
//     let location = useLocation();
//     if (loading) {
//         return <CircularProgress sx={{ mt: 20 }} />
//     };
//     if (user.email) {
//         return children;
//     };
//     return <Navigate to="/login" state={{ from: location }} />
// };

// export default PrivateRoute;