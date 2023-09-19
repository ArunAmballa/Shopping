import Cart from  "./pages/Cart";
import Home from  "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
const App = () => {
  return(
    <div>
      <div>
          <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  );
};

export default App;
