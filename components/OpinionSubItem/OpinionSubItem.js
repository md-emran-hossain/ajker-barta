import React from 'react';
import Analysis from './Analysis';
import Editorial from './Editorial';
import Interview from './Interview';
import WorldMedia from './WorldMedia';

const OpinionSubItem = () => {
    return (
        <div className='container mx-auto lg:pb-5 py-10'>
            <div className="grid grid-cols-4 gap-4">
                <div className="..."><Editorial /></div>
                <div className="..."><Interview /></div>
                <div className="..."><Analysis /></div>

                <div className="..."><WorldMedia /></div>

            </div>
        </div>
    );
};

export default OpinionSubItem;