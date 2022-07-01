import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import AcceptIcon from "../../assets/png/accept64.png";
import CrossIcon from "../../assets/png/cross64.png";
import LegitIcon from "../../assets/png/check24.png";
import PhishIcon from "../../assets/png/cross24.png";

function CheckUrl() {
  const [inputUrl, setInputUrl] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [resInfo, setResInfo] = React.useState([]);
  /* eslint-disable */
  const HTTP_URL_VALIDATOR_REGEX =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  const checkLink = (string) => {
    return string.match(HTTP_URL_VALIDATOR_REGEX);
  };
  const checkUrlHandler = () => {
    document.body.style.overflow = "hidden";

    if (checkLink(inputUrl)) {
      setLoading(true);
      axios
        .get(
          `https://phishing-url-detection-backend.herokuapp.com/api/?url=${inputUrl}`
        )
        .then((res) => {
          console.log(res.data);
          setResInfo(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("not an url");
    }
  };
  const clearHandler = () => {
    setResInfo([]);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="ml-5">
          <h1 className="text-6xl font-bold text-sky-400/75">Check URL</h1>
          <p className="py-6">
            Please add the url of a website to verify whether the url if the{" "}
            <span className="text-2xl text-sky-400">legitimate</span> or{" "}
            <span className="text-2xl text-red-400">phishing</span>
          </p>
        </div>
        <div className="w-full p-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-sm m-3"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          {/* btn-xs sm:btn-sm md:btn-md lg:btn-lg */}
          <div className="w-full">
            <label
              className="btn modal-button m-3"
              htmlFor="my-modal-2"
              onClick={checkUrlHandler}
            >
              Analyze URL
            </label>{" "}
            <Link to="/">
              <button className="btn m-3">Return home</button>
            </Link>
          </div>
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              <label
                htmlFor="my-modal-2"
                class="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={(e) => (document.body.style.overflow = "auto")}
              >
                ✕
              </label>
              {inputUrl === "" ? (
                <h3 className="font-bold text-lg text-red-400 text-center">
                  Provide URL to analyze
                </h3>
              ) : loading ? (
                <progress className="progress w-full"></progress>
              ) : (
                <>
                  <h3 className="font-bold text-lg">{resInfo.url}</h3>
                  <div className="divider"></div>
                  <div className="flex w-full flex-col lg:flex-row">
                    {resInfo.predictionMade === 0 ? (
                      <div class="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center">
                        <img src={AcceptIcon} alt="legitimate" />
                        Legtimate Prediction Rate: {resInfo.successRate}%
                      </div>
                    ) : (
                      <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center">
                        <img src={CrossIcon} alt="phishing" />
                        Phishing Prediction Rate: {resInfo.phishRate}%
                      </div>
                    )}
                  </div>
                  <div className="overflow-y-scroll h-40">
                    <p className="py-1">
                      {resInfo.featureExtractionResult[0] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the domain part of URL has IP address?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[1] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the length of URL
                      {"<"}54?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[2] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the URL contains any URL shortning service?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[3] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the URL have {"'@'"}
                      symbol?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[4] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the position of last occurance of {"'//'"} in URL {">"}{" "}
                      7?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[5] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the domain name include {"'-'"} in the URL?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[6] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the URL have multiple sub-domain ?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[7] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is {"'https://'"} present in domain part of the URL?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[8] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the age of the URL {">"} 6 months?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[9] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the DNS Record of the URL is empty?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[10] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the URL present in Alexa Database(Alexa, the Web
                      Information Company, 1996)
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[11] === 0 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is domain of URL expires less than a year?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[12] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the URL present in top phishing IDs or top phishing
                      domain?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[13] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is the URL using iframe?
                    </p>
                    <p className="py-1">
                      {resInfo.featureExtractionResult[14] === 1 ? (
                        <img
                          className="inline"
                          src={LegitIcon}
                          alt="legitimate"
                        />
                      ) : (
                        <img
                          className="inline"
                          src={PhishIcon}
                          alt="phishing"
                        />
                      )}{" "}
                      Is {"'onMouseOver'"} changes status bar in the URL?
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckUrl;
