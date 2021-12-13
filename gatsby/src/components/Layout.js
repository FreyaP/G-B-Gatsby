import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
// normalize creates normal cross browser css
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  background: white;
  margin-top: 12rem;
  padding: 1rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />

      <Nav />
      <ContentStyles>
        {children}
        <Footer />
      </ContentStyles>
    </div>
  );
}
