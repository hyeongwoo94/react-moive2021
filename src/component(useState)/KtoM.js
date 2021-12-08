import { useState } from "react";

const KtoM = () => {
  const [kmter, setKmter]= useState();
  const onChange = (event) => {
    setKmter(event.target.value);
  };
  const reset = () => {
    setKmter(0)
  }
  const [flipped, setFlipped] = useState(false);
  const onFlip= () => {
    reset();
    setFlipped((current)=> !current)
  }
  return(
    <>
    
    <div>
      <label htmlFor="KM" style={{marginRight:"17px"}}>KM</label>
      <input 
      id="KM" 
      placeholder="0" 
      type="number" 
      value={flipped ? kmter / 0.621371 : kmter }
      onChange={onChange}
      disabled={flipped === true}
      />
      <button onClick={reset} style={{marginLeft:"5px"}}>리셋</button>
      <br></br>
      <label htmlFor="MIL" style={{marginRight:"5px"}}>Miles</label>
      <input id="MIL"
      placeholder="0"
      type="number" 
      value={flipped ? kmter : kmter * 0.621371}
      onChange={onChange}
      disabled={flipped === false}
      />
      <button onClick={onFlip} style={{marginLeft:"5px"}}>변환</button>
    </div>
    </>
  )
}

export default KtoM;