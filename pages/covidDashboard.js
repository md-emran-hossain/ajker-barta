import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AllCountry from '../components/CovidUpdate/AllCountry';
import CovidHeader from '../components/CovidUpdate/CovidHeader';
import Global from '../components/CovidUpdate/Global';
import useAuth from '../hooks/useAuth';

const CovidDashboard = () => {
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!user.email) {
      router.replace('/login')
    }
  }, [user.email, router])
  return (
    <div>
      <CovidHeader />
      <Global />
      <AllCountry />
    </div>
  );
};

export default CovidDashboard;