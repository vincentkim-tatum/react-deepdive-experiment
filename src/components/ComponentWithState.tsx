import React, { useState } from "react";

const ComponentWithState = () => {
  const [testState, setTestState] = useState<number>(0);
  const handleIncreaseNum = () => {
    debugger;
    setTestState((prev) => prev + 1);
  };
  const handleDecreaseNum = () => {
    setTestState((prev) => prev - 1);
  };
  return (
    <div>
      Counter : {testState}
      <button onClick={handleIncreaseNum}>상태 + 1</button>
      <button onClick={handleDecreaseNum}>상태 - 1</button>
    </div>
  );
};

export default ComponentWithState;
