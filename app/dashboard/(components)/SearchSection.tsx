import { UserButton } from "@clerk/nextjs";
import { Home, HomeIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-r from-red-600 via-black to-black flex flex-col md:flex-row justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <Link href="/">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300">
            <HomeIcon/>
          </button>
        </Link>
        <Link href="/">
          <h2 className="text-2xl md:text-3xl font-bold cursor-pointer">
            Content Generator
          </h2>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-0 space-x-4 md:space-x-6 w-full max-w-xl">
        <div className="w-full flex items-center p-2 border rounded-md bg-gray-50">
          <Search className="text-black" />
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => onSearchInput(e.target.value)}
            className="bg-transparent w-full outline-none text-black placeholder-gray-500"
          />
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default SearchSection;
