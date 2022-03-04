import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AllCountry from '../components/CovidUpdate/AllCountry';
import CovidHeader from '../components/CovidUpdate/CovidHeader';
import Global from '../components/CovidUpdate/Global';
import useAuth from '../hooks/useAuth';

const CovidDashboard = () => {
  const { user, loading } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (loading) {
      return <div>Nothing</div>
    }
    if (!user.email) {
      router.push({
        pathname: '/login',
        query: { from: router.pathname }
      })
    }
  }, [user.email, router, loading])
  return (
    <div>
      <CovidHeader />
      <Global />
      <AllCountry />
    </div>
  );
};

export default CovidDashboard;