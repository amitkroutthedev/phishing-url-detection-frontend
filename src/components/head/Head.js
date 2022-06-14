import React from "react";
import { Link } from "react-router-dom";
function Head() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
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
          <button className="btn btn-primary m-5 hover:scale-110">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
