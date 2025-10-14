import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/15 text-gray-600 py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-semibold"> <Image width={100} height={100} src="/images/logoHero.png" alt="" /></div>
            </div>
            <p className="text-sm mt-2">86 Petersham town, New South Wales Wardill Street, Australia PA 6550</p>
            <p className="text-sm mt-1">+61 525 240 310</p>
            <p className="text-sm mt-1">contact@land.com</p>  
          </div>
          <div>
            <h3 className="font-semibold text-lg text-red">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Career</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Properties</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-red">Learn More</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Account</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <form className="mt-4 flex">
           
            </form>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-vimeo-v"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-darkGray">
          <p> <span className='text-red'> &copy;</span> 2018 Zytheme, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
