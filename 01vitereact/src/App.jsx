import { useState } from "react";

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>add{counter}</button>
      <br />
      <button>value{counter}</button>
    </>
  );
}

export default App;
