import React from "react";

const RecentOrders = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <table className="min-w-full divide-y divide-black">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Order No.</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1700956288352-e96c3830b5d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Wade Warren"
                className="w-8 h-8 rounded-full mr-2"
              />
              Wade Warren
            </td>
            <td className="px-4 py-2">15478256</td>
            <td className="px-4 py-2">$124.00</td>
            <td className="px-4 py-2 text-green-500">Delivered</td>
          </tr>
          <tr>
            <td className="px-4 py-2 flex items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jane Cooper"
                className="w-8 h-8 rounded-full mr-2"
              />
              Jane Cooper
            </td>
            <td className="px-4 py-2">48965786</td>
            <td className="px-4 py-2">$365.02</td>
            <td className="px-4 py-2 text-green-500">Delivered</td>
          </tr>
          <tr>
            <td className="px-4 py-2 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1648415041078-d5b259c683be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Guy Huwkins"
                className="w-8 h-8 rounded-full mr-2"
              />
              Guy Huwkins
            </td>
            <td className="px-4 py-2">78958215</td>
            <td className="px-4 py-2">$45.88</td>
            <td className="px-4 py-2 text-red-500">Cancelled</td>
          </tr>
          <tr>
            <td className="px-4 py-2 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1700317440795-4f52d9364783?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Kristin Watson"
                className="w-8 h-8 rounded-full mr-2"
              />
              Kristin Watson
            </td>
            <td className="px-4 py-2">20965732</td>
            <td className="px-4 py-2">$65.00</td>
            <td className="px-4 py-2 text-red-500">Pending</td>
          </tr>
          <tr>
            <td className="px-4 py-2 flex items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1682965455667-ddf5eb44b73e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Suvannah Nguyen"
                className="w-8 h-8 rounded-full mr-2"
              />
              Suvannah Nguyen
            </td>
            <td className="px-4 py-2">78514568</td>
            <td className="px-4 py-2">$128.20</td>
            <td className="px-4 py-2 text-green-500">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
