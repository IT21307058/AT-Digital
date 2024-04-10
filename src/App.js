import { Routes as Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home  from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Fotter from "./components/Footer/Fotter";

function App() {
  return (
    <Router>
      <div style={{minHeight: "90vh", margin: "0px", padding: "0px"}}>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </div>
      <Fotter/>
    </Router>
  );
}

export default App;
