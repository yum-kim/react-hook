import React, {useRef, useState} from 'react';

//그냥 변수로 선언한 값과 Ref로 선언한 값의 차이 확인
function UseRef() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  }

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ', countVar);
  }

  return (
    <div> 
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>render!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
    </div>
  );
}

export default UseRef;
