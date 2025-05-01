import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Parent div with relative position */}
      <div className="relative w-72 h-72 bg-red-500 rounded-lg p-5">
        {/* This is the parent div with relative position */}
        <div className="absolute top-12 left-12 w-36 h-36 bg-green-500 rounded-lg flex justify-center items-center text-white font-bold">
          {/* This is the child div with absolute position */}
          Positioned absolutely inside the red box.
        </div>
      </div>
    </div>
  );
}

export default App;
