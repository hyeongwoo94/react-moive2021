import { useState } from "react";
const App = () => {
  const [minutes, setMinutes]= useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => {
    setMinutes(0)
  }
  return(
    <>
    <h1 style={{textAlign:"center"}}>단위 변환기</h1>
    <div>
      <label htmlFor="minutes" style={{marginRight:"5px"}}>분</label>
      <input 
      id="minutes" 
      placeholder="분" 
      type="number" 
      value={minutes}
      onChange={onChange}
      />
      <button onClick={reset} style={{marginLeft:"5px"}}>리셋</button>
      <br></br>
      <label htmlFor="hours" style={{marginRight:"5px"}}>시</label>
      <input id="hours"
      placeholder="시간"
      type="number" 
      value={Math.round(minutes / 60)}
      disabled
      />
    </div>
    </>
  )
}

export default App;


//useState는 기본적으로 array를 제공한다.const [minutes, setMinutes]
//htmlFor를 사용하는 이유는 리액트는 jsx문번을 사용하기 때문에 몇가지가 더있다.
//onChange == input에 변화가 생기면 리스닝해준다.
//const onChange = (event) => {
//  setMinutes(event.target.value);
//};
//이벤트 발생시 해당 타겟의 값을 가져온다.
// value={Math.round(minutes / 60)} ===숫자를 반올림해준다.

//const reset = () => {
//  setMinutes(0)
//}
//state의 값을 0으로 돌아가니 리셋이다.
//input 속성중 disabled은 입력을 못하게 막는 것이다.