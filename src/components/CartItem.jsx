import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";

const CartItem = ({item}) => {
  const dispatch=useDispatch()

  function removeFromCart(){
    dispatch(remove(item.id))
  }

  return (
    <div>
      <div>
        {item.title}
      </div>
      <div>
        <img src={item.image}></img>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div>
        <button onClick={removeFromCart}>Delete</button>
      </div>

    </div>
  )
};

export default CartItem;
