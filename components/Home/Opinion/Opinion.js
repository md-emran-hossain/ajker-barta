import React from 'react';
import Analysis from './AnaLysis/Analysis';
import Editorial from './Editorial/Editorial';
import Interview from './Interview/Interview';
import OpEd from './OpEd/OpEd';
import WorldMedia from './WorldMedia/WorldMedia';

const Opinion = ({ opinion }) => {
    return (
        <div data-testid='opinionId'>
            <OpEd opinion={opinion} />
            <div className='container mx-auto lg:pb-5 py-10 border-b'>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    <Editorial opinion={opinion} />
                    <Interview opinion={opinion} />
                    <Analysis opinion={opinion} />
                    <WorldMedia opinion={opinion} />
                </div>
            </div>
        </div>
    );
};

export default Opinion;