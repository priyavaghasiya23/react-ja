import React ,{useState}from 'react';

const Task3 = () => {
    const [state, setState] = useState({
        name: "dev",
        age: 0,
        contact: 12567,
    });
    return (
        <div>
            <ul>
                {Object.keys(state).map((key, index) => (
                    <li key={index}>{`${key}: ${state[key]}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default Task3;