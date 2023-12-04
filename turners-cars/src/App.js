import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Subscription } from "./pages/Subscription";
import { Trucks } from "./pages/Trucks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turners-subscription" element={<Subscription />} />
        <Route path="/trucks-and-machinery" element={<Trucks />} />
      </Routes>
    </div>
  );
}

export default App;
