import React from "react";
import ProjectStastics from "../components/ProjectStastics";
import Platforms from "../components/Platforms";
import TopSection from "../components/TopSection";
import RecentOrders from "../components/RecentOrders";
import CustomerFeedback from "../components/CustomerFeedback";

const Home = () => {
  return (
    <div className="p-5 space-y-4">
      <TopSection />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="bg-white p-4 h-full flex flex-col rounded-lg">
            <ProjectStastics />
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white p-4 h-full flex flex-col rounded-lg">
            <Platforms />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="bg-white p-4 h-full flex flex-col rounded-lg text-black">
            <RecentOrders />
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white p-4 h-full flex flex-col rounded-lg text-black">
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
