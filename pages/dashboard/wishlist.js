import React from 'react';
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import WishList from '../../components/Dashboard/WishList/WishList';

const Wishlist = () => {
  return (
    <div>
      <DashboardHome>
        <WishList />
      </DashboardHome>
    </div>
  );
};

export default Wishlist