import "./scss/style.scss";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <HashRouter>
      <Header />
      <HamburgerMenu />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  );
}

export default App;
