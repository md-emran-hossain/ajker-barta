import Image from 'next/image';
import React from 'react';
import logo from '../../../public/ass/New_Project-removebg-preview.png'

const Footer = () => {
  return (
    <div className="container px-4 mx-auto">

      <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

        <div className="footer-info lg:w-1/3 md:px-4">

          <Image className=" mb-4 sm:mb-0 sm:mr-4" src={logo} alt="" height="65"
            width="130" />
          <p>Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click.</p>
          <div className="mt-4">
            <ul className='s-item-ul'>
              <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-linkedin-in"></i></li>
              <li><i className="fab fa-youtube"></i></li>
            </ul>


          </div>
        </div>

        <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
          <div className="sm:flex">
            <div className="sm:flex-1">
              <h6 className="text-base font-medium uppercase mb-2">About</h6>
              <div>
                <a href="#" className="py-1 block hover:underline">Company</a>
                <a href="#" className="py-1 block hover:underline">Culture</a>
                <a href="#" className="py-1 block hover:underline">Subscription Plans</a>
                <a href="#" className="py-1 block hover:underline">Careers</a>
              </div>
            </div>
            <div className="sm:flex-1 mt-4 sm:mt-0">
              <h6 className="text-base font-medium uppercase mb-2">What we offer</h6>
              <div>
                <a href="#" className="py-1 block hover:underline">Blocks</a>
                <a href="#" className="py-1 block hover:underline">Resources</a>
                <a href="#" className="py-1 block hover:underline">Tools</a>
                <a href="#" className="py-1 block hover:underline">Tutorials</a>
                <a href="#" className="py-1 block hover:underline">Freebies</a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">


          <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1">

            <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden" style={{ maxHeight: '5rem' }}>
              <div className="flex items-center px-2 py-4">
                <Image className="block rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src={logo} alt="" height="50"
                  width="90" />
                <div className="text-center sm:text-left sm:flex-grow">
                  <div className="mb-4">
                    <p className="text-md leading-tight">Adam Wathan</p>
                    <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden" style={{ maxHeight: '5rem' }}>
              <div className="flex items-center px-2 py-4">
                <Image className="block rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src={logo} alt="" height="50"
                  width="90" />
                <div className="text-center sm:text-left sm:flex-grow">
                  <div className="mb-4">
                    <p className="text-md leading-tight">Adam Wathan</p>
                    <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden" style={{ maxHeight: '5rem' }}>
              <div className="flex items-center px-2 py-4">
                <Image className="block rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src={logo} alt="" height="50"
                  width="90" />
                <div className="text-center sm:text-left sm:flex-grow">
                  <div className="mb-4">
                    <p className="text-md leading-tight">Adam Wathan</p>
                    <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden" style={{ maxHeight: '5rem' }}>
              <div className="flex items-center px-2 py-4">
                <Image className="block rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src={logo} alt="" height="50"
                  width="90" />
                <div className="text-center sm:text-left sm:flex-grow">
                  <div className="mb-4">
                    <p className="text-md leading-tight">Adam Wathan</p>
                    <p className="text-sm leading-tight">Developer at NothingWorks Inc.</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-t-2 md:flex md:-mx-4 md:items-center">
        <div className="md:flex-1 md:px-4 text-center md:text-left">
          <p>Copyright &copy; {new Date().getFullYear()} Ajker-Barta. All Rights Reserved.
          </p>
        </div>
        <div className="md:flex-1 md:px-4 text-center md:text-right">
          <a href="#" className="py-2 px-4 hover:underline">Terms of Service</a>
          <a href="#" className="py-2 px-4 hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;