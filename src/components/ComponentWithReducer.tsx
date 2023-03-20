import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ComponentWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Reducer 컴포넌트</div>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default ComponentWithReducer;
