import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div>
      <NavLink to="/">
      <div>
        <img src="" alt="Image"></img>
      </div>
      </NavLink>

      <div>
        <NavLink to="/">
        <p>Home</p>
        </NavLink>
        
        <NavLink to="/cart">
        <p>cart</p>
        </NavLink>
       
      </div>
      
    </div>
  )
};

export default Navbar;
