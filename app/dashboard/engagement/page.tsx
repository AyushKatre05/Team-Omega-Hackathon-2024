import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Header Section */}
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Welcome to Engagement Dashboard
      </h1>
      <p className="text-lg mb-12 text-center max-w-md">
        Connect and analyze your engagement across various social media platforms.
      </p>

      {/* Button Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Link href={'/dashboard/engagement/Fb'}>
          <button className="w-full p-4 bg-white text-blue-600 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100">
            Instagram
          </button>
        </Link>
        <Link href={'/dashboard/engagement/Fb'}>
          <button className="w-full p-4 bg-white text-blue-600 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100">
            Facebook
          </button>
        </Link>
        <Link href={'/dashboard/engagement/Yt'}>
          <button className="w-full p-4 bg-white text-blue-600 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100">
            Youtube
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
