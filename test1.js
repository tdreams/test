/* Reverse any string & return reversed string */

const reverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse("reverse any string & return reversed string"));

/* 2.Create counter app in React with increase, decrease and reset button with counter starting from 0 */
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleDecrease = () => setCounter(counter - 1);
  const handleIncrease = () => setCounter(counter + 1);
  return (
    <div className="App">
      <h1>Counter</h1>
      <p style={{ fontSize: "2rem", fontWeight: "bolder", color: "red" }}>
        {counter}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button style={{ padding: "8px 10px" }} onClick={handleDecrease}>
          Decrease
        </button>
        <button style={{ padding: "8px 10px" }} onClick={handleIncrease}>
          increase
        </button>
        <button style={{ padding: "8px 10px" }} onClick={() => setCounter(0)}>
          reset
        </button>
      </div>
    </div>
  );
}

/* Find second max & second minimum number of an array & return max & min number separated by comma. Array can be empty or contain duplicate numbers too. */
const findSecondMinMax = (array) => {
  if (array.length <= 2) {
    return "the array should have at least 2 elements";
  }
  //sort asc the array
  array.sort((a, b) => a - b);
  //find the sescond minimum and max
  const secondMin = array[1];
  const secondMax = array[array.length - 2];
  return `${secondMin},${secondMax}`;
};

console.log(findSecondMinMax([4, 2, 1, 9, 4, 9, 10, 4, 1]));
console.log(findSecondMinMax([5, 1, 3, 2, 4]));

/* 3.Find whether the number is prime or not and return true or false. Prime number is one which is divisible only by itself & 1.Example- 2,3,5,7,11,13,17,....etc */
