"use client";

import AccountSection from "./AccountSection";
import AppLogo from "./AppLogo";

const NavBar = () => {
  return (
    <div className="flex bg-white h-16 w-full shadow-sm border-b sticky top-0 px-28">
      <AppLogo />
      <AccountSection />
    </div>
  );
};

export default NavBar;
