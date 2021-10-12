import React from "react";

const Home = () => {
  return (
    <>
      <div className="container my-4">
        <div className="inner-container">
          <button className="btn btn-danger">-</button>
          <span>Your Balance: </span>
          <button className="btn btn-success">+</button>
        </div>
      </div>
    </>
  );
};

export default Home;
