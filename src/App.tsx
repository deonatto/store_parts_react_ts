import Home from "./views/Home/Home";
import Part from "./views/Part/Part";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part/:name" element={<Part />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
