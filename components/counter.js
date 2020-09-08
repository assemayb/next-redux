import { useSelector, useDispatch } from "react-redux";

const useCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () =>
    dispatch({
      type: "INCREMENT",
    });

  const decrement = () =>
    dispatch({
      type: "DECREMENT",
    });

  const reset = () =>
    dispatch({
      type: "RESET",
    });
  return { count, increment, decrement, reset };
};

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>
        count : <span> {count} </span>{" "}
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
