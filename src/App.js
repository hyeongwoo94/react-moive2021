import { useEffect, useState } from "react";
const Hellow = ()=> {
  return(
    <h2>hellow</h2>
  )
}
const App = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {setCounter((current) => current + 1)};
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {setKeyword(event.target.value)};
  useEffect(() => {},[keyword]);
  useEffect(() => {},[counter]);
  const [show,setShow] = useState(false);
  const onShowing = () => {setShow((current) => !current)}
return(
  <>
  <input value={keyword}
  onChange={onChange}
  placeholder="키워드 입력"
  />
  <p>{counter}</p>
  <button onClick={onClick}>클릭</button>
  {show ? <Hellow /> : null}
  <button onClick={onShowing}>{show ? "Hide": "Show"}</button>
  </>
)
}

export default App;

// useEffect (() => {
//   console.log("hi");
//   return() => console.log ("bye");
// },[])
//리렌더링 될때 hi가 나오고 렌더링이 사라질때 bye가 나타난다.