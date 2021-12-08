import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {setCounter((current) => current + 1)};
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {setKeyword(event.target.value)};
  useEffect(() => {},[keyword]);
  useEffect(() => {},[counter]);
return(
  <>
  <input value={keyword}
  onChange={onChange}
  placeholder="키워드 입력"
  />
  <p>{counter}</p>
  <button onClick={onClick}>클릭</button>
  </>
)
}

export default App;

// useEffect는 두개의 argument를 가지는 함수이다.
// 첫번째는 내가 실행시키고 싶은 코드 두번째는 리엑트가 지켜보는 것
// 두번째가 변환될때마다 첫번째를 실행시키는 코드
// parameter = 매개변수 = 함수와 메서드 입력 변수 명
// argument = 전달인자,인자 = 함수와 메서드의 값 
// useEffect(() => {},[keyword]);
// useEffect(() => {},[counter]);
// []안에잇는 state만 지켜보면서 값이 바뀔때 해당 컴포넌트만 리렌더링을 해준다.
// []빈칸이면 처음페이지가 나타날 때 한번만 실행된다.
// useEffect(() => {},[counter,keyword]);이렇게 여러개를 한번에 써줘도 됨.