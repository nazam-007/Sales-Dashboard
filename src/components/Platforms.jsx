import React from "react";
import { FaBullseye, FaHamburger, FaUtensils } from "react-icons/fa";

const Platforms = () => {
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-red-500 rounded-full">
              <FaBullseye className="text-white" />
            </div>
            <span className="text-black font-semibold">Goals</span>
          </div>
          <div className="text-gray-400">
            <span>&gt;</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-blue-500 rounded-full">
              <FaHamburger className="text-white" />
            </div>
            <span className="text-black font-semibold">Popular Dishes</span>
          </div>
          <div className="text-gray-400">
            <span>&gt;</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-teal-500 rounded-full">
              <FaUtensils className="text-white" />
            </div>
            <span className="text-black font-semibold">Menus</span>
          </div>
          <div className="text-gray-400">
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
