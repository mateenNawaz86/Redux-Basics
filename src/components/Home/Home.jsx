import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../state/index";

const Home = () => {
  const dispatch = useDispatch();

  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreator,
    dispatch
  );
  return (
    <>
      <div className="container my-4">
        <div className="inner-container">
          <button className="btn btn-danger" onClick={() => withdrawMoney(30)}>
            -
          </button>
          <span>Your Balance: </span>
          <button
            className="btn btn-success"
            onClick={() => depositeMoney(100)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
