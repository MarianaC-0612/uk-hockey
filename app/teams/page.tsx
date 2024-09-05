import React from 'react';
import Link from 'next/link';

const TeamsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 mt-[-50px]">
      {/* Heading */}
      <h3 className="text-2xl font-bold">What are you looking for?</h3>

      {/* Boxes with Links */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Local Teams Box */}
        <Link href="/teams/local-teams">
          <div className="w-64 h-64 md:w-80 md:h-80 border rounded-lg text-center text-2xl font-semibold shadow-lg hover:bg-gray-100 transition cursor-pointer relative">
            {/* Background Image */}
            <img 
              src="/local.png" 
              alt="Local Teams Image" 
              className="absolute inset-0 w-full h-full object-cover opacity-70" 
            />
            {/* Overlay Text */}
            <div className="relative z-10 flex items-center justify-center h-full text-black">
              Local Teams
            </div>
          </div>
        </Link>

        {/* National Teams Box */}
        <Link href="/teams/national-teams">
          <div className="w-64 h-64 md:w-80 md:h-80 border rounded-lg text-center text-2xl font-semibold shadow-lg hover:bg-gray-100 transition cursor-pointer relative">
            {/* Background Image */}
            <img 
              src="/flags.png" 
              alt="National Teams Image" 
              className="absolute inset-0 w-full h-full object-cover opacity-70" 
            />
            {/* Overlay Text */}
            <div className="relative z-10 flex items-center justify-center h-full text-black">
              National Teams
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default TeamsPage;
