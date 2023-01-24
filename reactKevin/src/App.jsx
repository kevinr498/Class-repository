import { useState } from "react";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import ReadMe from "./components/readMe.jsx";
import Feeling from "./components/feeling.jsx";
import "toolcool-range-slider";
import "./App.css";
import "toolcool-range-slider";

function App() {
  const feeling = ["😥", "😀", "😠"];
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    feeling[event.target.value];
    const newValue = event.target.value;
    setValue(newValue);
    return;
  };

  return (
    <div className="App">
      <Header />
      <toolcool-range-slider
        slider-width="300px"
        slider-height="15px"
        slider-radius="0.5rem"
        min="0"
        max="2"
        value={value}
        step="1"
        onClick={handleChange}
      />

      <Feeling text={feeling[value]} />
    </div>
  );
}

export default App;
