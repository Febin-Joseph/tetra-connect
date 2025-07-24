import React from "react";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-100 py-8">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mx-auto">
      {children}
    </div>
  </div>
);

export default Layout;