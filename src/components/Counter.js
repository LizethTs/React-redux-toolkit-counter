import React from "react";
import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div className="counterContainer">
      <div className="content">
        <h1 className="title">Counter Redux Slice</h1>
        <div className="counter">
          <button className="button" onClick={() => dispatch(decrement())}>-</button>
          <h3 className="number">{count} </h3>
          <button className="button" onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
