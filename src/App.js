import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
