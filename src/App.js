import React,{useEffect ,useContext} from "react";
import Appbar from "./Components/Appbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './Components/CartSection.js/Cart';
import Login from "./Components/Login";
import { auth } from "./firebase";
import { ProductContext } from "./Context/ProductState";

const App = () => {
  const productData = useContext(ProductContext)
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      authUser?productData.setAuthUser(authUser):productData.setAuthUser(null)
    })
  }, [])
  
  return (
    <Router>
      <div className="bg-[#EAEDED]">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/carts">
            <Header />
            <Appbar />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Appbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
