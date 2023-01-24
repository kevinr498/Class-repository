import { useState } from "react";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import ReadMe from "./components/readMe.jsx";
import Feeling from "./components/feeling.jsx";
import "toolcool-range-slider";
import "./App.css";
import "toolcool-range-slider";

function App() {
  const [value, setValue] = useState();
  const checkValue = "fred";
  const splitArrary = ([] = checkValue.split(""));
  const [guessedValue, setGuessedValue] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    const newValue = event.target.value;
    setValue(newValue);
    checkArray(newValue);
    return;
  };
  function checkArray(valueCheck) {
    const testValue = valueCheck;
    const trueValue = splitArrary.findIndex((value) => {
      if (value === testValue) return true;
    });
    setGuessedValue(trueValue);
    console.log(trueValue, guessedValue);
  }

  return (
    <div className="App ">
      <div className="flex">
        <Header text={splitArrary[guessedValue]} />
      </div>
      <input onKeyUp={handleChange} maxLength="1" />
    </div>
  );
}

export default App;
