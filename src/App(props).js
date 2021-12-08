import { useState } from "react"
const Btn = ({text, size, onClick}) =>{
  return(
    <>
    <button
    onClick={onClick} 
    style={{
      background: "tomato",
      fontSize: size ? "30px" : "20px",
      color: "white",
      marginRight: "5px",
      border: "none"
    }}
    >
    {text}
    </button>
    </>
  )
}
//fontSize: size ? "30px" : "20px" props를 이용하여 if문을 만들어 두가지 스타일 적용 할 수 있다.


// const Btn = (props) =>{
//   return(
//     <>
//     <button >
//     {props.text}
//     </button>
//     </>
//   )
// }
//이런식으로 써도 되지만 줄여서 쓰는게 효율적,줄열쓰기위해서는 ({속성값})식으로 사용하면된다.

const App = () => {
  const [changText, setChangText] = useState("세번째");
  const changeValue = () => setChangText("네번째");
//속성 값을 변겨해주는 코드 
return(
    <>
    <Btn text="첫번째" size={true} />
    <Btn text="두번째" size={false} />
    <Btn text={changText}  onClick={changeValue}/>
    </>
  )
}

export default App;
//컴포넌트 안은 내가 왕, 내가 설정하는데로 설정이 가능하다.
//이방법은 같은 스타일의 형식을 안에 내용만 바꿔 줄때 유용하다.
//{true,false}를 사용할때는 꼭 {}을 사용해서 넣어주자.

//<Btn text={changText}  onClick={changeValue}/>
//여기서 onClick은 이벤트가 아닌 그냥 props이다. onClick를 하기 위해서는 위의 Btn 컴포넌트에가서
//스타일처럼 onClick 속성을 넣어주고 해당 값에 아래에 써줬던 props이름을 넣어줘야한다.

//알아두면 좋은 것
//export default React.memo(App)라고 마지막에해주면 해당 컴포턴트중 state값이 바뀌는 것만 리렌더링해준다.
//이것을 하는 이유는 부모가 리렌더링 되면 자식 컴포넌트 모두가 리렌더링 되기 때문이다.