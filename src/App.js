import "./scss/style.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HamburgerMenu />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
