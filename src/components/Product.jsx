import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart}=useSelector((state)=>(state))
  const dispatch=useDispatch()
  

  function addToCart(){
    dispatch(add(post))
  }

  function removeFromCart(){
    dispatch(remove(post))
  }

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>
        <img src={post.image}></img>
      </div>
      <div>
        {post.price}
      </div>
      <div>
        
        <button onClick={addToCart}>Add</button>
        <button onClick={removeFromCart}>Remove</button>
      </div>
    </div>
    
  )
};

export default Product;
