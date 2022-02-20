import React from 'react';
import Link from 'next/link';

const NavigationBar = () => {
    return (
        <div className='mb-6 shadow-sm border-t border-b border-red-100 sticky top-0 w-full bg-white z-50 hidden md:block'>
            <div className="container ">
                <ul className='flex items-center justify-between flex-wrap gap-3 py-3'>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link className='block' href="/bangladesh" >Bangladesh</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/international" >International</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/sports" >Sports</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/sciencetechnology" >Science & Technology</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/business" >Business</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/coronavirus" >Coronavirus</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/entertainment" >Entertainment</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/lifestyle" >Lifestyle</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;
