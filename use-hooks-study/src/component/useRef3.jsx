import React, { useRef, useEffect } from 'react';

//DOM요소에 접근하는 용도의 useRef
const UseRef3 = () => {
   const inputRef = useRef();
   
   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const login = () => {
       alert(`환영합니다 ${inputRef.current.value}`);
   }
   
    return (
        <div>
            <input ref={inputRef} type="text" placeholder='username'/>
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default UseRef3;