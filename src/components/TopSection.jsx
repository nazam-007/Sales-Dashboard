import React from "react";

const TopSection = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="bg-white p-4 rounded-lg col-span-1">
        <p>Total Orders</p>
        <p className="text-2xl font-semibold">75</p>
        <p className="text-green-500">3%</p>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-1">
        <p>Total Delivered</p>
        <p className="text-2xl font-semibold">70</p>
        <p className="text-red-500">-3%</p>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-1">
        <p>Total Cancelled</p>
        <p className="text-2xl font-semibold">05</p>
        <p className="text-green-500">3%</p>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-1">
        <p>Total Revenue</p>
        <p className="text-2xl font-semibold">$12k</p>
        <p className="text-red-500">-3%</p>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-2">
        <p>Net Profit</p>
        <p className="text-2xl font-semibold">$6759.25</p>
        <div className="flex items-center mt-2">
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="text-green-500 ml-2">70%</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
