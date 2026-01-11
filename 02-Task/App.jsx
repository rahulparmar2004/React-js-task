import React, { useState, useEffect } from "react";
import './index.css'


const App = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("counterValue");
    return saved ? Number(saved) : 0;
  });


  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count]);


  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="counter-card">
        <h1>Counter</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="btn decrement" onClick={decrement}>-</button>
          <button className="btn reset" onClick={reset}>Reset</button>
          <button className="btn increment" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};


export default App