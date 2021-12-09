import { useState } from "react";

const App = () => {
  const [toDo, setToDo]= useState("");
  const [toDos, setToDos] =useState([]);
  const inputChange = (event) => setToDo(event.target.value);
  const btnSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
//toDo가 비어있다면 return시키고 함수가 작동하지 않는다.
//직접적으로 state를 수정할 수 없다.   setToDo(""); 빈값도 추가가된다.
//setToDos((currentArray) => [toDo, ...currentArray]); 최근의 arrayfmf 가져오고 거기에 todo를 추가한다.
//...이중요하다. 이것을 안해주면 [todo,[currentArray]]로 저장된다. 
return(
  <>
  <h2>할 일 ({toDos.length})</h2>
    <form onSubmit={btnSubmit}>
      <input 
      type="text"
      value={toDo}
      onChange={inputChange}
      placeholder="키워드 입력"
      />
      <button
      style={{marginLeft:"5px"}}
      >추가하기</button>
      <hr />
      <ul>
        {toDos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </form>
  </>
)
}

export default App;

// {toDos.map((todo,index)=>(
//   <li key={index}>{todo}</li>
// ))}
// *****여기서 todo는 내가 가져온 객체의 이름을 지정해주는거다. 만약 API를 가져왓다면 API에 있는 객체의 이름을 지정해주고
// 객체이름.name, 객체이름.id 등등 해당 객체의 정보를 사용할 수 있다.
//toDos의 array를 가져와서 li와 key를 추가한 새로운 array를 만들어서 브라우저에 나타낸다.
//ㅣlist를 render 할때는 Key라는 props가 꼭필요하다. 
//여기서 jsx문법으로 index의 타입은 number를 의미하기 때문에  index를 넣어준거다.