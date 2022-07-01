import React from "react";

function Feature() {
  return (
    <div className="bg-base-200 p-2">
      <div className="card bg-base-300 rounded-box p-2 m-2">
        <h1 className="text-4xl font-semibold text-sky-400/75">About</h1>
        <p className="p-3 text-lg">
          Phishing is a kind of Cybercrime trying to obtain important or
          confidential information from users which is usually carried out by
          creating a counterfeit website that mimics a legitimate website.
          Although these pages have similar graphical user interfaces, they must
          have different Uniform Resource Locators (URLs) from the original
          page.
        </p>
      </div>
      <div className="card bg-base-300 rounded-box p-2 m-2">
        {/* <h1 className="text-4xl font-semibold text-sky-400/75">Feature</h1> */}
        <div className="flex w-full flex-col lg:flex-row">
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            Trained and Tested with 2000 urls in Google Collab
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            15 Features are provided as input
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            Verify Domain, Urls and Scripts to check if it is safe or phish
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            Used Classifier : XGBoost
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
