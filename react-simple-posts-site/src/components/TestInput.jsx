import React, { useState } from 'react';

function TestInput() {
    const [inputValue, setInputValue] = useState(0);

    return (
        <div>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </div>
    );
}

export default TestInput;