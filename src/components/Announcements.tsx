import React from "react";

const Announcements = () => {
  return (
    <div className="bg-pink-100 rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        <span className="capitalize text-xs ">View all</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-md p-4 bg-shade04 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="bg-pink-100 text-xs text-gray-500  rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-800 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="rounded-md p-4 bg-shade03 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="bg-pink-100 text-xs text-gray-500  rounded-md p-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-800 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
