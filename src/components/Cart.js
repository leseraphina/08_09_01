import { useDispatch, useSelector } from "react-redux"
import { chagneAge } from "../redux/user";

export default function Cart(){
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  // console.log(state);
  // console.log(dispatch);
  return (
   <div>
    <p>{state.user.people}</p>
    <p>
      {state.user.age}
      <button 
      type="button"
      onClick={() => dispatch(chagneAge(10))}>+</button>
    </p>
   </div>
  )
}