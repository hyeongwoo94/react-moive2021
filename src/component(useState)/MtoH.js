import { useState } from "react";

const MtoH = () => {
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
    
    <div>
      <label htmlFor="minutes" style={{marginRight:"5px"}}>분</label>
      <input 
      id="minutes" 
      placeholder="0" 
      type="number" 
      value={flipped ? Math.round(minutes * 60) : minutes }
      onChange={onChange}
      disabled={flipped === true}
      />
      <button onClick={reset} style={{marginLeft:"5px"}}>리셋</button>
      <br></br>
      <label htmlFor="hours" style={{marginRight:"5px"}}>시</label>
      <input id="hours"
      placeholder="0"
      type="number" 
      value={flipped ? minutes : Math.round(minutes / 60)}
      onChange={onChange}
      disabled={flipped === false}
      />
      <button onClick={onFlip} style={{marginLeft:"5px"}}>변환</button>
    </div>
    </>
  )
}

export default MtoH;