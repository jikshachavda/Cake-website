import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Shop from "./Shop";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
