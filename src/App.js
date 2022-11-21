import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Product from "./component/pages/Product";
// import FakeStore from './component/FakeStore';
// import Form from "./component/Form";
import FooterMQ from "./component/HumbleFooter";
import NavBarr from "./component/NavBarr";
import NoMatch from "./component/Utilities/NoMatch";
// import Testimonial from "./component/pages/Testimonial";
import Testimonial from "./component/productFiles/Testimonial";
import NewProduct from "./component/productFiles/NewProduct";
import PopularProduct from "./component/productFiles/PopularProduct";
import ProductDesc from "./component/productFiles/ProductDesc";
import Login from "./component/pages/Login";
import { AppProvider } from "./component/Utilities/auth";
import { RequiredAuth } from "./component/Utilities/RequiredAuth";
// import RandNumm from './component/RandNumm';
// import Shop from './component/Shop';

function App() {
  return (
    <div className="App">
      <AppProvider>
      {/* 
      // <Form/>
      // <Shop/>
      // <FakeStore/>
      // <RandNumm/>
       */}
      <Router>
        <NavBarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<RequiredAuth><About /></RequiredAuth>} />
          <Route path="/product" element={<RequiredAuth> <Product /></RequiredAuth>} />
          {/* <Route path="/testimonial" element={<Testimonial/>}/> */}
          <Route path="/testimonial" element={<RequiredAuth><Testimonial/></RequiredAuth>}> 
          <Route path="newproduct" element={<NewProduct/>} />
          <Route path="newproduct/:id" element={<ProductDesc/>} />
          <Route path="popular" element={<PopularProduct/>} />
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <FooterMQ />
      </Router>
      </AppProvider>
    </div>
  );
}

export default App;
