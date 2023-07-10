import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
     
          <Route path="/" element={<Home />} />
          <Route path="/About" element ={<About />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
