import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// testdrive
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

console.log("Dummer Hans: " + multiplication(testDrive, y));

const addition = (a, b) => a + b;

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
console.log("Schlauer Kerl: " + correctMultiplication(testDrive, y));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
