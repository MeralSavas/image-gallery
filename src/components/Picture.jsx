import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="container">
      <div className="picture">
        <div className="imgDiv">
          <img src="{data.src.large}" alt="img" />
        </div>
        <div className="infoPhoto">
          <p style={{ color: "blue" }}>{data.photographer.toLocalUpperCase}</p>
        </div>
      </div>
    </div>
  );
};
export default Picture;
