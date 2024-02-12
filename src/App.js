import React, { Fragment, useState } from "react";
import "./styles.css";

const multiplication = (a, b) => a * b;
const addition = (a, b) => Number(a) + Number(b);

function getIntegerString(a) {
  if (a.toString().includes(".")) {
    return a.split(".")[0];
  }
  return a;
}
function getFractionString(a) {
  if (a.toString().includes(".")) {
    return a.split(".")[1];
  }
  return "";
}

function deletePoint(a) {
  const withoutPoint = getIntegerString(a) + getFractionString(a);
  return withoutPoint;
}

function MultiplyInWriting({ a, b }) {
  const aDecimalPlaces = Number(getFractionString(a).length);
  const bDecimalPlaces = Number(getFractionString(b).length);
  const firstLine = a * Number(b.toString().substring(0, 1));
  const secondLine = a * Number(b.toString().substring(1, 2));
  const decimalSum = addition(aDecimalPlaces, bDecimalPlaces);
  const pointlessProduct = multiplication(deletePoint(a), deletePoint(b));
  const decimalSumPlaces = Number(pointlessProduct.toString().length);
  const integerPlaces = decimalSumPlaces - Number(decimalSum);
  let result = pointlessProduct;
  decimalSum == 0
    ? (result = pointlessProduct)
    : (result =
        pointlessProduct.toString().substring(0, integerPlaces) +
        "." +
        pointlessProduct.toString().substring(integerPlaces, decimalSumPlaces));
  return (
    <>
      <p className="calc-underlined">
        {a}*{b}
      </p>
      <p className="calc-write">{firstLine}</p>
      <p className="calc-write">{secondLine}</p>
      <p className="calc-result">{result}</p>

      <p>
        Result <output className="result">{result}</output>
      </p>
    </>
  );
}

function MultiplyWithArray(a, b) {
  const firstArray = a.split("");
  const secondArray = b.split("");
  console.log(firstArray);
  console.log(secondArray);
}
MultiplyWithArray("250", "53");

export default function App() {
  const [firstFactor, setFirstFactor] = useState("0");
  const [secondFactor, setSecondFactor] = useState("0");
  const [operation, setOperation] = useState("multiplication");

  // write function to start component MiW?
  function handleCalculation() {
    console.log("Handle calc");
    console.log(operation);
  }

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
          <label htmlFor="firstfactor">
            First factor
            <input
              id="firstfactor"
              value={firstFactor}
              onChange={(event) => setFirstFactor(event.target.value)}
            ></input>
          </label>
          <select
            id="operation"
            value={operation}
            onChange={(event) => setOperation(event.target.value)}
          >
            <option value="">Choose an operation</option>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
          </select>
          {/* <button
            className="calculate-button"
            
          >
            *
          </button> */}
          <label htmlFor="secondfactor">
            Second factor
            <input
              id="secondfactor"
              value={secondFactor}
              onChange={(event) => setSecondFactor(event.target.value)}
            ></input>
          </label>
          <button className="calculate-button" onClick={handleCalculation}>
            =
          </button>
          <div>
            <p className="calc-write">Calculation</p>
            {operation == "multiply" ? (
              <MultiplyInWriting a={firstFactor} b={secondFactor} />
            ) : null}
          </div>
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
