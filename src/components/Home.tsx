import React, { createElement } from "react";

const Home = () => {
  const myElement = createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    children: "createElement로 만든 element",
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        jsx로 만든 element
      </div>
      {myElement}
    </>
  );
};

export default Home;
