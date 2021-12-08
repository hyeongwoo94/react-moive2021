import PropTypes from "prop-types";
import styles from "./Button.module.css"
//import하고 {styles.스타일}로 하여 클래스이름으로 스타일을 할 수 있다.
//module 이름은 어떤것이든 상관 없으나 구분하기위해 해당 컴포넌트 이름을 사용하는게 보기에 좋다.
const Button = ({text}) =>{
  return(
    <>
      <button className={styles.btn}>{text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//npm i prop-types를 하고 proptypes를 정해줘서 오류시 무엇이 오류인지 알려준다.
//Button.propTypes = {
//  text: PropTypes.string.isRequired,
//}; 대소문자 구별하기
export default Button;