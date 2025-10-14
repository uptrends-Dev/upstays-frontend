import React from 'react';

const PropertyBanner: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-72 flex justify-center items-center text-white bg-amber-400 PropertyBannerBg">
        {/* <div className="absolute inset-0 bg-black/20" ></div> */}
      <div className="text-center space-y-4 bg-black/40 p-6 rounded-lg shadow-lg h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-white">DO YOU WANT TO SELL YOUR PROPERTY ?</h2>
        <p className="text-lg">Call us and list your property here</p>
        <p className="text-xl font-semibold">+201003472237</p>
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">JUST CONTACT US</button>
      </div>
    </div>
  );
};

export default PropertyBanner;
