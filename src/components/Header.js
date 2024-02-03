// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-left: 1.5rem;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Container>
      <Logo>Rooba Finance</Logo>
      <Navigation>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Sign Up</NavLink>
      </Navigation>
    </Container>
  );
};

export default Header;
