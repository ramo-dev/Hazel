
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fullscreen Image Container */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1718383411069-21487c4421ee?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          {/* Main Content */}
          <div className="relative flex flex-col md:items-center justify-center h-full p-6 text-white bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold">Hazel Bhakhoya</h1>
            <p className="mt-2 text-lg tracking-widest">PHOTOGRAPHER</p>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Page;

