import React from "react";
import "./App.css";

import Header from "./components/HeaderComponent/Header.js";
import Image from "./components/ImageComponent/Image.js";
import Footer from "./components/FooterComponent/Footer.js";

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
