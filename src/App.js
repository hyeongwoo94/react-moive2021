import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {setCounter((current) => current + 1)}
return(
  <>
  <p>{counter}</p>
  <button onClick={onClick}>클릭</button>
  </>
)
}

export default App;


//const onClick = () => {setCounter((current) => current + 1)}
//==const onClick = () => setCounter((prev) => prev + 1);
//prev()는 이전 요소를 선택해서 반환
//current()는 가장 최신요소르 선택해서 반환
//next()는 다음 요소를 선택해서 반환