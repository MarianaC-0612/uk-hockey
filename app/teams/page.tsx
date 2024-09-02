import React from 'react';
import Link from 'next/link';

const TeamsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 mt-[-50px]">
      {/* Heading */}
      <h3 className="text-3xl font-bold">Please select one</h3>

      {/* Boxes with Links */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <Link href="/teams/local-teams">
          <div className="w-64 h-64 md:w-80 md:h-80 p-8 border rounded-lg text-center text-2xl font-semibold bg-white shadow-lg hover:bg-gray-100 transition cursor-pointer">
            Local Teams
          </div>
        </Link>

        <Link href="/teams/national-teams">
          <div className="w-64 h-64 md:w-80 md:h-80 p-8 border rounded-lg text-center text-2xl font-semibold bg-white shadow-lg hover:bg-gray-100 transition cursor-pointer">
            National Teams
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TeamsPage;
