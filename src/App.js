import { useState } from "react";
const App = () => {
  const [minutes, setMinutes]= useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => {
    setMinutes(0)
  }
  const [flipped, setFlipped] = useState(false);
  const onFlip= () => {
    reset();
    setFlipped((current)=> !current)
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
      value={flipped ? Math.round(minutes * 60) : minutes }
      onChange={onChange}
      disabled={flipped === true}
      />
      <button onClick={reset} style={{marginLeft:"5px"}}>리셋</button>
      <br></br>
      <label htmlFor="hours" style={{marginRight:"5px"}}>시</label>
      <input id="hours"
      placeholder="시간"
      type="number" 
      value={flipped ? minutes : Math.round(minutes / 60)}
      onChange={onChange}
      disabled={flipped === false}
      />
      <button onClick={onFlip}>변환</button>
    </div>
    </>
  )
}

export default App;

//setFlipped((current)=> !current)
//이 함수 실행시 false가 true가 된다. !이란 반대를 말하는 것.