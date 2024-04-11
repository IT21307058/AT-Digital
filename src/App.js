import { Routes as Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Fotter from "./components/Footer/Fotter";
import { Helmet } from "react-helmet"
import logo from '../src/assets/image/Logo.png'

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AT-Digital:#1 Digital Marketing Agency Sydney</title>
      </Helmet>
      <div style={{ minHeight: "90vh", margin: "0px", padding: "0px" }}>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </div>
      <Fotter />
    </Router>
  );
}

export default App;
