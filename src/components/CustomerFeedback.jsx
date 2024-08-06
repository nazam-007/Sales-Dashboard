import React from "react";

const CustomerFeedback = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Customer's Feedback</h2>
      <div className="space-y-4">
        <div>
          <div className="flex items-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1700856417754-cb66c909f4d7?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jenny Wilson"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <h3 className="text-sm font-semibold">Jenny Wilson</h3>
              <div className="flex">
                <span className="text-yellow-400">★★★★</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            The food was excellent and so was the service. I had the mushroom
            risotto with scallops which was awesome. I had a burger over greens
            (gluten-free) which was also very good. They were very conscientious
            about gluten allergies.
          </p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1656075067365-bf13fe1cc0e1?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dianne Russell"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <h3 className="text-sm font-semibold">Dianne Russell</h3>
              <div className="flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            We enjoyed the Eggs Benedict served on homemade focaccia bread and
            hot coffee. Perfect service.
          </p>
        </div>
        {/* Add more feedback as needed */}
      </div>
    </div>
  );
};

export default CustomerFeedback;
