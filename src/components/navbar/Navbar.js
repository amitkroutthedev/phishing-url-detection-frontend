import React from "react";
import Logo from "../../assets/svg/logo.svg";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <img className="scale-150" src={Logo} alt="icon" />
        </button>
      </div>
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl text-sky-400/100"
          href="#/"
        >
          PhishNet.AI
        </a>
      </div>
    </div>
  );
}

export default Navbar;
