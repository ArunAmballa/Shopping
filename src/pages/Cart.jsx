import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart}=useSelector((state)=>state);

  return (
    <div>
      {
        cart.length >0 ? (
          cart.map((item)=>{
            return (<CartItem item={item}></CartItem>);
          })
        ):
        
        (<div>
          <p>Cart Empty</p>
          </div>)
      }

    </div>
  )
};

export default Cart;
