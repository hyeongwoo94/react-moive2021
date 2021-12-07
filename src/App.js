import { useState } from "react";
const App = () => {
  const [minutes, setMinutes]= useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  return(
    <>
    <h1 style={{textAlign:"center"}}>단위 변환기</h1>
    <div style={{display:"grid", justifyContent:"space-around"}}>
      <label htmlFor="minutes">분</label>
      <input 
      id="minutes" 
      placeholder="분" 
      type="number" 
      value={minutes}
      onChange={onChange}
      />
      <h3>target{minutes}</h3>
      <label htmlFor="hours">시</label>
      <input if="hours" placeholder="시간" type="number" />
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