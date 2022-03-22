import React, {useMemo, useState} from 'react';



const easyCalulate = (number) => {
    console.log('쉬운 계산');
    return number + 1;
};


const hardCalculate = (number) => {
    console.log('어려운 계산');

    for (let i = 0; i < 999999999; i++) {} //생각하는 시간
    return number + 10000;
};

const Calulator = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    //useMemo 사용 X
    // const hardSum = hardCalculate(hardNumber);

    //useMemo 사용 O
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const easySum = easyCalulate(easyNumber);

    return (
        <div>
            <h2>🎀 useMemo 연습</h2>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onChange={(e)=> setHardNumber(parseInt(e.target.value))} />
            <span>  + 1000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNumber} onChange={(e)=> setEasyNumber(parseInt(e.target.value))} />
            <span>  + 1000 = {easySum}</span>

        </div>
    );
}

export default Calulator;