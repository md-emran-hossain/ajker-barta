import React from 'react';
import Sports from './Home/Sports/Sports';
import Voting from './Voting/Voting';

const SportAndVoting = () => {
    return (
        <div className='container mx-auto lg:pb-5 py-10 border-b  border-gray-200'>
        <div className="grid grid-cols-3 gap-2">
 
  <div className="col-span-2 ..."><Sports></Sports></div>
  <div className="..."><Voting></Voting></div>
  
</div>
</div>
    );
};

export default SportAndVoting;