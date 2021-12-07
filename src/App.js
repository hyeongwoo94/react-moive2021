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


// #useState 사용법
// const App = () => {
//   const [couter, setCounter] = useState(0);
//   const Click = () => {
//     setCounter(couter + 1);
//     ===setCounter((current) => current + 1); 위와 동일한 함수 하지만 좀더 안전하다. 현재 state를 가지고 새로운 값을 계산한다.
//   };
//   return(
//     <div>
//       <h3> 클릭 횟수 : {couter}</h3>
//       <button onClick={Click}>클릭!</button>
//     </div>
//   )
// }
// **couter의 초기값을 useStat(초기값 설정) 후 setCouter(새로 리렌더링 될 함수 설정) 해주고 이것을 새 Click 함수를 만들고 boutton의 속성값으로 설정해준다
// ===버튼 클릭할때 마다 couter가 증가한다 **  tip setCouter("짠" or 무언가) 이렇게 작성 후 클릭 한번했을 때 {couter}의 값이 "짠" or 무언가 이렇게 나온다.
