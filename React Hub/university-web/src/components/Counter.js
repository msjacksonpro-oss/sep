import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h3>Class Attendance Counter</h3>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="counter-btn" onClick={increment}>+ Add</button>
        <button className="counter-btn" onClick={decrement}>- Remove</button>
      </div>
    </div>
  );
}

export default Counter;
