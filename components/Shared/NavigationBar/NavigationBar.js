import React from 'react';
import Link from 'next/link';
import useAuth from '../../../hooks/useAuth';

const NavigationBar = () => {
    const { toggleLanguage } = useAuth();

    return (
        <div className='mb-6 shadow-sm border-t border-b border-red-100 sticky top-0 w-full bg-white z-50 hidden md:block'>
            <div className="container ">
                <ul className='flex items-center justify-between flex-wrap gap-3 py-3'>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link className='block' href="/bangladesh" >{toggleLanguage ? "বাংলাদেশ" : "Bangladesh"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/international" >{toggleLanguage ? "বিশ্ব" : "International"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/sports" >{toggleLanguage ? "খেলা" : "Sports"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/sciencetechnology" >{toggleLanguage ? "বিজ্ঞান ও প্রযুক্তি" : "Science & Technology"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/business" >{toggleLanguage ? "বাণিজ্য" : "Business"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/coronavirus" >{toggleLanguage ? "করোনাভাইরাস" : "Coronavirus"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/entertainment" >{toggleLanguage ? "বিনোদন" : "Entertainment"}</Link></li>
                    <li className='font-semibold text-gray-500 hover:text-gray-700 font-serif'><Link href="/lifestyle" >{toggleLanguage ? "  লাইফস্টাইল" : "Lifestyle"}</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;
