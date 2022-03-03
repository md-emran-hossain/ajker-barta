import React from 'react';
import NewsPublish from '../../components/NewsPublish/NewsPublish'
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';

const AddNews = () => {
  return (
    <DashboardHome>
      <NewsPublish />
    </DashboardHome>
  );
};

export default AddNews;