import React, { useState, useContext } from "react";
import { CartItemsContext } from "../CartItemsContext/CartItemsContext";
import ListItem from "../Header/ListItem";

function ProductSpecifications() {
  const { specifications } = useContext(CartItemsContext);
  console.log(specifications);
  const [showSpecifications, setShowSpecifications] = useState(true);
  const [showPackage, setPackage] = useState();
  const [showVideoReview, setShowVideoReview] = useState();
  let something = specifications[0];
  console.log(typeof something);

  const handleSpecifications = (e) => {
    if (e.target.id === "specs") {
      setPackage(false);
      setShowVideoReview(false);
      setShowSpecifications(true);
    } else if (e.target.id === "package") {
      setShowSpecifications(false);
      setShowVideoReview(false);
      setPackage(true);
    } else if (e.target.id === "video") {
      setPackage(false);
      setShowSpecifications(false);
      setShowVideoReview(true);
    }
  };
  return (
    <>
      <div className="specifications-bar">
        <div className="tab">
          <h4
            id="specs"
            onClick={(e) => {
              handleSpecifications(e);
            }}
          >
            Specifications
          </h4>
          <h4
            id="package"
            onClick={(e) => {
              handleSpecifications(e);
            }}
          >
            Package Content
          </h4>
          <h4
            id="video"
            onClick={(e) => {
              handleSpecifications(e);
            }}
          >
            Video & Review
          </h4>
          <h4>Download</h4>
        </div>
        <div className="specifications">
          <div
            className={`specifications-content  ${
              showSpecifications ? `current-tab` : ""
            } `}
          >
            <div className="wrapper">
              <ul>
                {specifications.specs.map((spe, index) => {
                  return <ListItem name={spe} />;
                })}
              </ul>
            </div>
          </div>
          <div className={`package-content ${showPackage && "current-tab"}`}>
            <ul>
              {specifications.packageContent.map((insideBox) => {
                return <ListItem name={insideBox} />;
              })}
            </ul>
          </div>
          <div className={`video-review ${showVideoReview && "current-tab"}`}>
            <iframe
              width="1200"
              height="600"
              src={specifications.videoReview}
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSpecifications;
