import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Interview = () => {
    return (
        <div>
            <h2 className='text-2xl pt-24 lg:pt-5 pb-5 text-red-500 font-bold'><span className='text-black'> Interview </span><ChevronRightIcon /></h2>
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src='https://images.prothomalo.com/prothomalo-english%2F2022-02%2F142e6260-0296-4448-b69a-5401559986af%2Fcab_golam.jpg?rect=0%2C0%2C918%2C612&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0' alt="Mountain" />
                <div className="px-2 py-4">
                    <p className="text-lg font-bold mb-2 text-slate-400"> the responsibility of WASA’s corruption on consumers: Golam Rahman</p>
                </div>
                <p className="px-6 pt-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">12 hours ago</span>
                </p>
                <div className="px-6 py-4 border-t-2 ">
                    <p className="font-bold mb-2 text-slate-400"> <span className='text-orange-700'>Interview: Dr Manzoor Ahmed</span> / Education gripped in an epidemic of incompetence</p>
                </div>
                <div className="px-6 py-4 border-t-2 ">
                    <p className="text-base font-bold mb-2 text-slate-400"> <span className='text-orange-700'>Special interview  </span> / Bangladesh crosses peak of Covid third wave</p>
                </div>
            </div>
        </div>
    );
};

export default Interview;