import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Analysis = () => {
    return (
        <div>
            <h2 className='text-2xl pt-24 lg:pt-5 pb-5 text-red-500 font-bold'><span className='text-black'> Analysis </span><ChevronRightIcon /></h2>
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src='https://images.prothomalo.com/prothomalo-english%2F2021-12%2Fe54b1618-b1fb-4d82-b0fb-ad92977fec6a%2FSylhet_medical_university.jpg?rect=42%2C0%2C456%2C304&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0' alt="Mountain" />
                <div className="px-2 py-4">
                    <div className="text-lg font-bold mb-2 text-slate-400"> the responsibility of WASA’s corruption on consumers: Golam Rahman</div>
                </div>
                <div className="px-6 pt-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">12 hours ago</span>
                </div>
                <div className="px-6 py-4 border-t-2 ">
                    <div className="text-base font-bold mb-2 text-slate-400"> <span className='text-orange-700'>Interview: Dr Manzoor Ahmed</span> / Education gripped in an epidemic of incompetence</div>

                </div>
                <div className="px-6 py-4 border-t-2 ">
                    <div className="text-base font-bold mb-2 text-slate-400"> <span className='text-orange-700'>Special interview  </span> / Bangladesh crosses peak of Covid third wave</div>
                </div>
            </div>
        </div>
    );
};

export default Analysis;