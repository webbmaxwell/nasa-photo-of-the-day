import React from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./components/HeaderComponent/Header.js";
import Image from "./components/ImageComponent/Image.js";
import Footer from "./components/FooterComponent/Footer.js";

function App() {

  const BigDiv = styled.div`
    height: 100%;
    text-align: center;
    background-image: linear-gradient(to right bottom, #234528, #eef27e)
  `

  return (
    <BigDiv>
      <Header />
      <Image />
      <Footer />
    </BigDiv>
  );
}

export default App;
