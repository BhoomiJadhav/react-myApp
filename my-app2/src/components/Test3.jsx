import { useEffect, useState } from "react";
function Test3() {
  let [count, updateCounter] = useState(0);
  //   let [Name, UpdateName] = useState("Xyz");
  useEffect(() => console.log("clicked"), [count]);
  return (
    <div>
      {/* <button
        onClick={() => {
          alert("Welcome");
        }}
      >
        click Me
      </button> */}
      {/* <h2>counter variable value is :{counter} </h2>
      <button
        onClick={() => {
          updateCounter(++counter);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          updateCounter(--counter);
        }}
      >
        Decrement
      </button>
      <h2>My name is {Name}</h2>
      <button onClick={() => UpdateName("Bhoomi Jadhav")}>Click me</button> */}

      <center>
        <h1>{count}</h1>
        <button onClick={() => updateCounter(count + 1)}>Change</button>
      </center>
    </div>
  );
}

export default Test3;
