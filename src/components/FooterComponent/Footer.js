import React from "react";
import styled from 'styled-components';
import "./Footer.css";

function Footer() {

  const Thanks = styled.p`
    padding: 2.5rem;
    font-size: 1.5rem;
  `

  return (
    <div>
      <Thanks>Thanks for checking out my app!</Thanks>
    </div>
  )
}

export default Footer;
