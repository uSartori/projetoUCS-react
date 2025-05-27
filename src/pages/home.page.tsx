import React from "react";
import HeaderComponent from "../components/header.component";
import MainComponent from "../components/main.component";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <HeaderComponent />
      <div className="flex-1 p-4">
        <MainComponent />
      </div>
    </main>
  );
};

export default HomePage;
