import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// testdrive (alle functionen später auslagern)
function getIntegerString(a) {
  if (a.includes(".")) {
    return a.split(".")[0];
  }
  return a;
}
function getFractionString(a) {
  if (a.includes(".")) {
    return a.split(".")[1];
  }
  return "";
}
const testDrive = "4.52";
const y = "3.1";
function deletePoint(a) {
  const withoutPoint = getIntegerString(a) + getFractionString(a);
  return withoutPoint;
  /* (
    <article>
      <p>{withoutPoint}</p>
    </article>
  ) */
}
const multiplication = (a, b) => a * b;
const addition = (a, b) => Number(a) + Number(b);
const subtraction = (a, b) => a - b;

function correctMultiplication(a, b) {
  const aDecimalPlaces = Number(getFractionString(a).length);
  const bDecimalPlaces = Number(getFractionString(b).length);
  const decimalSum = addition(aDecimalPlaces, bDecimalPlaces);
  const pointlessProduct = multiplication(deletePoint(a), deletePoint(b));
  const decimalSumPlaces = Number(pointlessProduct.toString().length);
  const integerPlaces = decimalSumPlaces - Number(decimalSum);
  const result =
    pointlessProduct.toString().substring(0, integerPlaces) +
    "." +
    pointlessProduct.toString().substring(integerPlaces, decimalSumPlaces);
  return result;
}
console.log("Dummer Hans: " + multiplication(testDrive, y));
console.log("Schlauer Kerl: " + correctMultiplication(testDrive, y));

function correctAddition(a, b) {
  const aDecimalPlaces = Number(getFractionString(a).length);
  const bDecimalPlaces = Number(getFractionString(b).length);
  if (aDecimalPlaces === 0 && bDecimalPlaces === 0) {
    const result = addition(a, b);
    return result;
  }
  const decDiff = subtraction(bDecimalPlaces, aDecimalPlaces);
  if (decDiff > 0) {
    const biggerA = deletePoint(a) * 10 ** decDiff;
    const pointlessSum = addition(Number(biggerA), Number(deletePoint(b)));
    const integerPlaces = pointlessSum.toString().length - bDecimalPlaces;
    const result =
      pointlessSum.toString().substring(0, integerPlaces) +
      "." +
      pointlessSum
        .toString()
        .substring(integerPlaces, pointlessSum.toString().length);
    return result;
  }
  const biggerB = deletePoint(b) * 10 ** -decDiff;
  const pointlessSum = addition(Number(biggerB), Number(deletePoint(a)));
  const integerPlaces = pointlessSum.toString().length - aDecimalPlaces;
  const result =
    pointlessSum.toString().substring(0, integerPlaces) +
    "." +
    pointlessSum
      .toString()
      .substring(integerPlaces, pointlessSum.toString().length);
  return result;
}
console.log("Schlauer Kerl meint: " + correctAddition("1.4", "3.6"));

console.clear;

//Subtraction
function correctSubtraction(a, b) {
  const aDecimalPlaces = Number(getFractionString(a).length);
  const bDecimalPlaces = Number(getFractionString(b).length);
  if (aDecimalPlaces === 0 && bDecimalPlaces === 0) {
    const result = subtraction(a, b);
    return result;
  }
  const decDiff = subtraction(bDecimalPlaces, aDecimalPlaces);
  console.log(decDiff);
  if (decDiff > 0) {
    const biggerA = deletePoint(a) * 10 ** decDiff;
    const pointlessDiff = subtraction(Number(biggerA), Number(deletePoint(b)));
    console.log(pointlessDiff);
    const integerPlaces = pointlessDiff.toString().length - bDecimalPlaces;
    console.log(integerPlaces);
    const result =
      pointlessDiff.toString().substring(0, integerPlaces) +
      "." +
      pointlessDiff
        .toString()
        .substring(integerPlaces, pointlessDiff.toString().length);
    return result;
  }
  const biggerB = deletePoint(b) * 10 ** -decDiff;
  console.log("biggerB: " + biggerB);
  const pointlessDiff = subtraction(Number(deletePoint(a)), Number(biggerB));
  const integerPlaces = pointlessDiff.toString().length - aDecimalPlaces;
  const result =
    pointlessDiff.toString().substring(0, integerPlaces) +
    "." +
    pointlessDiff
      .toString()
      .substring(integerPlaces, pointlessDiff.toString().length);
  return result;
}
// console.log(correctSubtraction("-4.1025", "-1.5"));

//Division in writing
function getPlaces(a) {
  let aPlaces = 0;
  a.toString().includes(".")
    ? (aPlaces = a.toString().length - 1)
    : (aPlaces = a.toString().length);
  return aPlaces;
}
console.log(getPlaces(234));

function writingDivision(a, b) {
  const aDecimalPlaces = Number(getFractionString(a).length);
  const bDecimalPlaces = Number(getFractionString(b).length);
  return "So net";
}
console.log(writingDivision("488.6", "8"));
//Input handling
const firstInput = document.getElementById("firstfactor");
const firstFactor = "123.456";
const multiplyButton = document.querySelector("[data-js='multiply-button']");

function handleInput() {
  const firstFactor = firstInput.value;
  console.log(firstFactor);
}

// const turtles = [
//   "christof",
//   "jan",
//   "jana",
//   "sonja",
//   "swetha",
//   "paul",
//   "mariia",
// ];
// console.log(turtles);
// console.log(turtles.slice().sort());

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
