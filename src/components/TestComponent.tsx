import React from "react";

const TestComponent = ({ prop }: { prop: string }) => {
  return (
    <div>
      <div>자식 컴포넌트입니다.</div>
      <div>이건 prop입니다. : {prop}</div>
    </div>
  );
};

export default TestComponent;
