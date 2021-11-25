import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
// normalize creates normal cross browser css
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  margin: 6rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 6rem);
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </div>
  );
}
