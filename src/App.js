const Btn = ({text, size}) =>{
  return(
    <>
    <button 
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
return(
    <>
    <Btn text="첫번째" size={true} />
    <Btn text="두번째" size={false} />
    <Btn text="세번째"  />
    </>
  )
}

export default App;
//컴포넌트 안은 내가 왕, 내가 설정하는데로 설정이 가능하다.
//이방법은 같은 스타일의 형식을 안에 내용만 바꿔 줄때 유용하다.
//{true,false}를 사용할때는 꼭 {}을 사용해서 넣어주자.