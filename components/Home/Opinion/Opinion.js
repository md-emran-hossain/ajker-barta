import React from 'react';
import Analysis from './AnaLysis/Analysis';
import Editorial from './Editorial/Editorial';
import Interview from './Interview/Interview';
import OpEd from './OpEd/OpEd';
import WorldMedia from './WorldMedia/WorldMedia';

const Opinion = () => {
    return (
        <>
            <OpEd />
            <div className='container mx-auto lg:pb-5 py-10'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Editorial />
                    <Interview />
                    <Analysis />
                    <WorldMedia />
                </div>
            </div>
        </>
    );
};

export default Opinion;