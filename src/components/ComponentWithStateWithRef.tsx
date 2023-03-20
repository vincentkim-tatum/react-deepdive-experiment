import React, { useState } from "react";

const ComponentWithStateWithRef = () => {
  const [arrayState, setArrayState] = useState<Array<number>>([]);

  const handleClickPush = () => {
    arrayState.push(1);
  };

  const handleClickSetPush = () => {
    setArrayState((prev) => prev.splice(0, 1));
  };

  const handleClickImmutablePush = () => {
    setArrayState((prev) => [...prev, 1]);
  };

  return (
    <div>
      <div>배열 상태 확인</div>
      <button onClick={handleClickPush}>배열에 그대로 push 하기</button>
      <button onClick={handleClickSetPush}>splice로 할당하기</button>
      <button onClick={handleClickImmutablePush}>
        immutability를 지키는 형태로 배열에 원소 추가하기
      </button>
      <ul>
        {arrayState.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentWithStateWithRef;
