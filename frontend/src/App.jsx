import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      <div className="main-content flex-grow p-8">
        <h1>
          lorem*100
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;