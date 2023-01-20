import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createElement } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setTextValue] = useState("");

  const handleSubmit = (event) => {
    console.log("Created Image Link");
    console.log(imageSrc);
    event.preventDefault();
    document.getElementById("image").appendChild(createImage);
  };
  const imageSrc = "https://source.unsplash.com/random?" + text;
  const createImage = createElement("img", { src: imageSrc }, null);

  return (
    <div className="App">
      <div>
        <h1>Display a Random Image</h1>
      </div>
      <h4>Search (separate terms with commas - no spaces)</h4>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => setTextValue(event.target.value)}
            value={text}
          ></input>
          <button className="imageSubmitButton" type="submit">
            GO
          </button>
        </form>
        <div id="image"></div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
