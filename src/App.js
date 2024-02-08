import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <article>
        <h1>Calculate in writing</h1>
        <p>
          Have you ever thought about the complexity of some algorithms you
          already know? <br></br>
          All the way back to primary school ...{" "}
        </p>
      </article>
      <div className="calculator">
        <h2>Multiply</h2>
        <div className="inputs">
          <label htmlFor="firstfactor">First factor</label>
          <input id="firstfactor"></input>
          <label htmlFor="secondfactor ">Second factor</label>
          <input id="secondfactor"></input>
          <button className="calculate-button" data-js="multiply-button">
            =
          </button>

          <p>Result</p>
          <p className="inputs" data-js="product-result"></p>
        </div>
      </div>
      {/* <StringToWords /> */}
    </main>
  );
}

// Für später

const testString = "1234567";
function StringToArray() {
  const firstArray = testString.split("");
  // console.log(firstArray);
  return (
    <article>
      <p>
        {firstArray[0]}
        {firstArray[1]}
        {firstArray[2]}
      </p>
    </article>
  );
}

const testText = "Hallo wie geht es dir?";
function StringToWords() {
  const testArray = testText.split(" ");
  // console.log(firstArray);
  return (
    <article>
      <p>
        {testArray[0]}
        {}
        {testArray[1]}
        {}
        {testArray[2]}
        {}
        {testArray[3]}
        {}
      </p>
    </article>
  );
}
