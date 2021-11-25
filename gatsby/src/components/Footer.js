import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 1rem;
  text-align: center;
`;
export default function Footer() {
  return (
    <>
      <ContactForm />
      <FooterStyles>
        <p>
          &copy; Copyright {new Date().getFullYear()} G&B Contracting | All
          Rights Reserved |{' '}
          <span>
            <a
              href="https://github.com/FreyaP"
              target="_blank"
              className="freya"
              rel="noreferrer"
            >
              Site developed by Freya
            </a>
          </span>
        </p>
      </FooterStyles>
    </>
  );
}
