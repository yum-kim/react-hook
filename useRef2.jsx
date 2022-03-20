import React, { useState, useRef, useEffect } from 'react';

//몇 번 렌더링 됐는지 카운트하기
//=> Ref 활용) 변화는 감지하지만 변화가 리렌더를 발생시키면 안되는 경우 편리

const useRef2 = () => {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수: ', renderCount);
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    );
};

export default useRef2;