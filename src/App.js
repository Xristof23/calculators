import React, { Fragment, useState } from "react";
import "./styles.css";
import { uid } from "uid";

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
      <p className="calc-write">Multiplication</p>
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

function MultiplyWithArray({ a, b }) {
  const aDecimalPlaces = Number(getFractionString(a).length);
  const bDecimalPlaces = Number(getFractionString(b).length);
  const allDecimalPlaces = addition(aDecimalPlaces, bDecimalPlaces);
  const firstCyphers = a.split("");
  const secondCyphers = deletePoint(b).split("");
  const arrayToSum = secondCyphers.map(
    (cypher, index) =>
      deletePoint(a) * cypher * 10 ** (secondCyphers.length - index - 1)
  );

  /*   const arrayToIndices = secondCyphers.map((cypher, index) => index);
  console.log(arrayToIndices); */

  const provResult = arrayToSum.reduce(addition, 0);
  const allPlaces = Number(provResult.toString().length);
  const integerPlaces = provResult.toString().length - Number(allDecimalPlaces);
  let result = provResult;
  allDecimalPlaces == 0
    ? (result = provResult)
    : (result =
        provResult.toString().substring(0, integerPlaces) +
        "." +
        provResult.toString().substring(integerPlaces, allPlaces));

  return (
    <div>
      <p className="calc-write">Multiplication (array based)</p>
      <p className="calc-underlined">
        {a}*{b}
      </p>
      {arrayToSum.map((line) => (
        <p key={uid(7)}>{line}</p>
      ))}
      <p className="calc-result">{result}</p>
    </div>
  );
}

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
      <section className="calculator">
        <h2>Calculator (incomplete)</h2>
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
            <option value="subtract">- subtraction</option>
            <option value="multiply">* multiply in writing</option>
            <option value="multiply with array">* multiply (array)</option>
            <option value="divide" disabled>
              / division
            </option>
          </select>
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
            {operation == "multiply" ? (
              <MultiplyInWriting a={firstFactor} b={secondFactor} />
            ) : null}
          </div>
          <MultiplyWithArray a={firstFactor} b={secondFactor} />
        </div>
      </section>
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
