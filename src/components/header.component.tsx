import React from "react";
import LogoComponent from "../components/logo.component";
import NavComponent from "../components/nav.component";

const HeaderComponent = () => {
  return (
  <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <LogoComponent />
    <NavComponent />
  </header>
);
};

export default HeaderComponent;
