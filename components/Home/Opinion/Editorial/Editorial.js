import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Editorial = () => {
  return (
    <div>
      <h2 className='text-2xl pt-24 lg:pt-5 pb-5 text-red-500 font-bold'><span className='text-black'>Editorial </span><ChevronRightIcon /></h2>
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src='https://images.prothomalo.com/prothomalo-english%2F2021-02%2Fd3aaa674-ab87-4dd2-aa1f-e1ca5757eb47%2Fed.png?rect=0%2C0%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0' alt="Mountain" />
        <div className="px-6 py-4">
          <div className="text-lg font-bold mb-2 text-slate-400">Fear despite record results in HSC exam WASA’s corruption on consumers: Golam Rahman</div>
        </div>
        <div className="px-6 pt-1 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">12 hours ago</span>
        </div>
        <div className="px-6 py-4 border-t-2 ">
          <div className="text-base font-bold mb-2 text-slate-400"> <span className='text-orange-700'>Environment and development</span> / Do not ignore recommendations of experts</div>
        </div>
        <div className="px-6 py-4 border-t-2 ">
          <div className="text-base font-bold mb-2 text-slate-400"> <span className='text-orange-700'>Disorder on the roads </span> / How do vehicles run without licences?</div>
        </div>
      </div>
    </div>
  );
};

export default Editorial;