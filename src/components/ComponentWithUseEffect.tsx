import React, { useEffect, useState } from "react";

const ComponentWithUseEffect = () => {
  const [testStateWithUseEffect, setTestStateWithUseEffect] = useState(false);
  const [anotherTestStatteWithUseEffect, setAnotherTestStateWithUseEffect] =
    useState(false);

  useEffect(() => {
    setTestStateWithUseEffect(true);
    console.log("useEffect가 의존성 없이 호출되었습니다.");
    return () => {
      console.log("useEffect 내부에서 반환되고 있는 함수입니다");
    };
  }, []);

  useEffect(() => {
    setAnotherTestStateWithUseEffect(true);
    console.log("testState의 변경으로 useEffect가 호출되었습니다.");
  }, [testStateWithUseEffect]);

  useEffect(() => {
    console.log("또 다른 testState의 변경으로 useEffect가 호출되었습니다.");
  }, [anotherTestStatteWithUseEffect]);

  useEffect(() => {
    console.log("컴포넌트의 갱신으로 useEffect가 호출되었습니다.");
  });

  return (
    <div>
      <h2>useEffect와 함께하는 상태 변경</h2>
      <button onClick={() => setTestStateWithUseEffect((prev) => !prev)}>
        useEffect 의존성 상태 변경하기, 상태 : {`${testStateWithUseEffect}`}
      </button>
      <button onClick={() => setAnotherTestStateWithUseEffect((prev) => !prev)}>
        useEffect 의존성 상태 변경하기, 상태 :{" "}
        {`${anotherTestStatteWithUseEffect}`}
      </button>
    </div>
  );
};

export default ComponentWithUseEffect;
