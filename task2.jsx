import React, { useState } from 'react';

const Counter = () => {
    const [time, setTime] = useState(0);

    const increment = () => {
        setTime(time + 1);
    };

    const decrement = () => {
        setTime(time - 1);
    };

    const reset=()=>setTime(0)

    return (
        <div>
            <h1>Counter: {time}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Counter;