import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      <div className="main-content flex-grow p-8">
        <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/login" element={<Login/>}/>
           <Route path="/registration" element={<Register/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;