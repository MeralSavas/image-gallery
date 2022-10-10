import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div>
      <h1>Garden Design</h1>
      <div className="photo">
        {data.map((a) => {
          return <Picture data={a} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
