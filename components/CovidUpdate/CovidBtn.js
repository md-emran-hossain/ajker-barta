import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const CovidBtn = () => {
  return (
    <div className='py-5'>
      <Link href='covidDashboard'>
        <a className='mx-auto text-xl text-blue-500 gap-2 flex justify-center items-center'>Go to Dashboard <HiOutlineArrowNarrowRight style={{ color: "red", marginTop: "3px" }} /></a>
      </Link>
    </div>
  );
};

export default CovidBtn;