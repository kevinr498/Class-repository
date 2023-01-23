import { useState } from "react";
import Button from "./button.jsx";
export default function Body() {
  const [count, setCount] = useState(0);

  buttons = [1, 2, 3, 4, 5];

  return (
    <div className="card">
      <Button text="1" onClick={() => setCount((count) => count + text)} />
      <Button text="2" onClick={() => setCount((count) => count + text)} />
      <Button text="3" onClick={() => setCount((count) => count + text)} />
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
