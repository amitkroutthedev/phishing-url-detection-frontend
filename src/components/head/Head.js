import React from "react";
import { Link } from "react-router-dom";
import Summary from "../summary/Summary";
function Head() {
  return (
    <div className="hero min-h-screen bg-base-200">
      {/* hero-content  max-w-md */}
      <div className="hero-content text-center">
        <div className="max-w">
          <h1 className="text-6xl font-bold text-sky-400/75">PhishNet.AI</h1>
          <p className="py-6">
            A Web Based Detection System to check harmful phished website with
            using Machine Learning.
          </p>

          <Link to="/checkurl">
            <button className="btn btn-primary m-5 hover:scale-110">
              Check Url!
            </button>
          </Link>
          <Link to="/features">
            <button className="btn btn-primary m-5 hover:scale-110">
              Features
            </button>
          </Link>
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Head;
