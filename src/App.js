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


