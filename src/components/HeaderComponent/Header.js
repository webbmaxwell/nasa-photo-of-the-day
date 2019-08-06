import React from "react";
import styled from 'styled-components';
import "./Header.css";

function Header() {

  const Title = styled.h1`
    margin: 0;
    padding: 3rem;
    color: white;
  `

  return (
    <div>
      <Title>NASA Photo of the Day</Title>
    </div>
  )
}

export default Header;
