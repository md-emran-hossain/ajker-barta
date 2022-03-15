import React, { useEffect } from 'react';
import NewsPublish from '../../components/NewsPublish/NewsPublish'
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome';
import useAuth from '../../hooks/useAuth';
import { useRouter } from 'next/router';

const AddNews = () => {
  const { admin, user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) {
      return <div>Nothing</div>
    }
    if (!admin || !user.email) {
      router.push({
        pathname: '/login',
        query: { from: router.pathname }
      })
    }
  }, [loading, user.email, router, admin])
  return (
    <DashboardHome>
      <NewsPublish />
    </DashboardHome>
  );
};

export default AddNews;