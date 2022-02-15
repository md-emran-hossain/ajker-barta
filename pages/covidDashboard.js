import React from 'react';
import AllCountry from '../components/CovidUpdate/AllCountry';
import CovidHeader from '../components/CovidUpdate/CovidHeader';
import Global from '../components/CovidUpdate/Global';

const covidDashboard = () => {
  return (
    <div>
      <CovidHeader />
      <Global />
      <AllCountry />
    </div>
  );
};

export default covidDashboard;