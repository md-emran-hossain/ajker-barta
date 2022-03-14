import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from '@mui/material';


const Advertisement = () => {
    return (
        <>
            <div className='container'>
                <div className='className="text-justify shadow-2xl px-8 py-8 mx-4"'>
                    <h2 className='text-3xl font-bold px-6 mt-5 mb-2 text-justify text-slate-500 decoration-zinc-900 hover:text-blue-400'>Advertisement</h2>
                    <hr />
                    <br />
                    <p className='text-justify mx-10'>As per the latest National Media Survey (NMS 2018 of Kantar MRB), 6.6 million people read the print edition of Ajker Barta every day, and it is the highest readership number among all Bangladeshi newspapers. Ajker Barta does not only have the widest reader base as a whole, but it also reaches to the most erudite readers of Bangladesh belonging to the upper SEC (Socio Economic Class). Ajker Barta is way ahead of any other newspaper in reaching key target groups of readers.</p>
                    <br />
                    <p className='text-justify mx-10'>Ajker Barta is the “Number 1” Bangladeshi as well as Bengali Language website in the world based on traffic and pageviews. Around 12 million users access this portal every month from over 200 different countries and territories. They generate around 280 million pageviews per month. Through all digital platforms, Bengali and English portals and mobile apps, Ajker Barta Online reaches over 1 million people every day at home and abroad.</p>
                    <br /> <br />
                    {/* print addition */}

                    <div>
                    <div className='flex'>
                        <div className='mx-10'>
                            <h2 className='text-2xl text-gray-900 font-extrabold'>Print Edition</h2>
                            <h2 className='text-xl font-bold text-gray-900 py-2'>Contact:</h2>
                            <ul>
                                <li className='flex'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>:ABC Road, Dhaka, Bangladesh</li>
                                <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>: +880-1234-24562</li>
                                <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>:ads@ajkerbarta.com</li>
                            </ul>
                        </div>
                        {/* download pdf section */}
                        <div>                           
                            <Link href={`https://www.prothomalo.com/widgets/docs/rate_card_prothom_alo_2022.pdf`} target="_blank" underline='none' rel='noreferrer noopener' ><Button variant="outlined" startIcon={<DownloadIcon />}>Download PDF</Button></Link>    
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Advertisement;