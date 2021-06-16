//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

//Utility imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Styles
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainContent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
