import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Navbar";
import ItemListCards from "./components/ItemListCards";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Router>
      {" "}
      {/* AsegÃºrate de envolver tu componente con BrowserRouter */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ItemListCards />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
