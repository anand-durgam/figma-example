// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Container>
      <SocialLinks>
        <SocialLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </SocialLink>
        <SocialLink
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </SocialLink>
      </SocialLinks>
    </Container>
  );
};

export default Footer;
