import React from "react";
import "./App.css";

import Header from "./components/HeaderComponent/Header.js";
import Image from "./components/ImageComponent/Image.js";
import Footer from "./components/FooterComponent/Footer.js";

function App() {

  return (
    <div className="App">
      <Header />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
