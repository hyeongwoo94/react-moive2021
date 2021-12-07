import { useState } from "react";
const App = () => {
  const [couter, setCounter] = useState(0);
  const Click = () => {
    setCounter(couter + 1);
  }
  return(
    <div>
      <h3> 클릭 횟수 : {couter}</h3>
      <button onClick={Click}>클릭!</button>
    </div>
  )
}

export default App;
