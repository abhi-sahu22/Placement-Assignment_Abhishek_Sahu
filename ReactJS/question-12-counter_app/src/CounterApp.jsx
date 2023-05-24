import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleIncrement}>Increase</button>
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterApp;
