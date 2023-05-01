import React from "react";

const NavBar = () => {
  return (
    <div className="hidden lg:block bg-black/1 py-3 space-x-12 text-sm border-t-[0.5px] border-border-light">
      <a href="">Feed</a>
      <a href="">Tracks</a>
      <a href="">Dashboards</a>
    </div>
  );
};

export default NavBar;
