import React, { useEffect, useRef, useState } from "react";

const ComponentWithState = () => {
  const [testState, setTestState] = useState<number>(38);
  const [renderedState, setRenderedState] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleIncreseClick = () => {
      setTestState((prev) => prev + 1);
    };
    buttonRef.current?.addEventListener("click", handleIncreseClick);

    return () =>
      buttonRef.current?.removeEventListener("click", handleIncreseClick);
  }, []);

  const handleIncreaseNum = async () => {
    await setTestState((prev) => prev + 1);
    await setTestState((prev) => prev + 1);
    setTestState((prev) => prev + 1);
  };

  const handleDecreaseClick = () => {
    setTestState((prev) => prev - 1);
    setTestState((prev) => prev - 1);
  };

  const handleRefClick = () => {
    setTestState((prev) => prev + 1);
  };

  useEffect(() => {
    setRenderedState((prev) => prev + 1);
  }, [testState]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Counter : {testState}
      <div>Render Count : {renderedState}</div>
      <button onClick={handleIncreaseNum}>상태 + 1</button>
      <button onClick={handleRefClick} ref={buttonRef}>
        ref로 상태 + 1
      </button>
      <button onClick={handleDecreaseClick}>상태 - 1</button>
    </div>
  );
};

export default ComponentWithState;
