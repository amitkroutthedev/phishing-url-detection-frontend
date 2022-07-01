import React from "react";
import AlgorithmIcon from "../../assets/png/algorithm.png";
import DatasetIcon from "../../assets/png/dataset.png";
import FeatureIcon from "../../assets/png/feature.png";
import VerifiedIcon from "../../assets/png/verified.png";
function Summary() {
  return (
    <div className="card w-full rounded-box">
      <div className="flex w-full flex-col lg:flex-row p-2">
        <div className="grid min-h-min w-full flex-grow card bg-base-300 rounded-box place-items-center text-center">
          <img src={DatasetIcon} alt="dataset" />
          Trained and Tested with 2000 urls in Google Collab
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid min-h-min w-full flex-grow card bg-base-300 rounded-box place-items-center text-center">
          <img src={FeatureIcon} alt="feature" />
          15 Feature Extractions are provided as input
        </div>
        <div className="divider xs:divider-horizontal"></div>
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="grid min-h-min w-full flex-grow card bg-base-300 rounded-box place-items-center text-center">
          <img src={VerifiedIcon} alt="verify" />
          Verify Domain, Urls and Scripts to check if it is safe or phish
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid min-h-min w-full flex-grow card bg-base-300 rounded-box place-items-center text-center">
          <img src={AlgorithmIcon} alt="algorithm" />
          Used Algorithm : XGBoost
        </div>
      </div>
    </div>
  );
}

export default Summary;
