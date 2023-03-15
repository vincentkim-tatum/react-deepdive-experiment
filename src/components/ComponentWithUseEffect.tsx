import React, { useEffect, useState } from "react";

const ComponentWithUseEffect = () => {
  const [testStateWithUseEffect, setTestStateWithUseEffect] = useState(false);

  useEffect(() => {
    console.log("useEffect가 의존성 없이 호출되었습니다.");
  }, []);

  useEffect(() => {
    console.log("testState의 변경으로 useEffect가 호출되었습니다.");
  }, [testStateWithUseEffect]);

  useEffect(() => {
    return () => {console.log('useEffect 내부에서 반환되고 있는 함수입니다')}
  }, [])

  return (
    <div>
      <h2>useEffect와 함께하는 상태 변경</h2>
      <button>
        useEffect 의존성 상태 변경하기, 상태 : {testStateWithUseEffect}
      </button>
    </div>
  );
};

export default ComponentWithUseEffect;
