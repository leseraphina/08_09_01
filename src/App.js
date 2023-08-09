import { Provider } from "react-redux";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import store from './store';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Cart01 from "./components/Cart01";

export default function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <div>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/cart01" element={<Cart01 />}/>
      </Routes>
    </div>
    </BrowserRouter>
  </Provider>
  );
}


