import { useState } from "react";
import MtoH from "./component/MtoH";
const App = () => {
  const [index,setIndex] = useState("0");
  const choice = (event) => {
    setIndex(event.target.value);
  }
//event는 html자체에 있는 이벤트이다.
  return(
    <>
    <h1 style={{textAlign:"center"}}>단위 변환기</h1>
    <div style={{textAlign:"center"}}>
      <select value={index} onChange={choice}>
        <option value="0">고르시오</option>
        <option value="1">분/시간</option>
        <option value="2">킬로미터/마일로</option>
      </select>
      <hr />
      {index === "0" ? "두개중 하나를 고르시오" : null}
      {index === "1" ? <MtoH /> : null}
      {index === "2" ? <MtoH /> : null}
    </div>
    </>
  )
}

export default App;

//select를 useState해서 value값에 맞쳐서 해당 부품만 나타나게 했다.
//event를 유념해서 보기