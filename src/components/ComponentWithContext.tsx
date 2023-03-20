import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ComponentWithContext = () => {
  const value = useContext(MyContext);
  const updateContext = () => {
    value.setContextValue();
  };

  return (
    <MyContext.Consumer>
      {(value) => (
        <div>
          {value.contextValue}{" "}
          <button onClick={updateContext}>컨텍스트 값 변경</button>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default ComponentWithContext;
