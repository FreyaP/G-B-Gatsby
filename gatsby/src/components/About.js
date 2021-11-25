import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Benefits from './Benefits';

const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  //row-gap: 3rem;
  background-color: var(--backgroundGrey);
  color: var(--white);
  .gatsby-image-wrapper {
    max-height: 600px;
  }
`;
const ArticleStyles = styled.article`
  display: grid;
  padding: 6rem;
  h2 {
    align-self: end;
  }
`;
function SingleAboutSection({ singleAbout }) {
  return (
    <>
      <Img fluid={singleAbout.image.asset.fluid} alt={singleAbout.title} />
      <ArticleStyles>
        <h2 className="center">{singleAbout.title}</h2>
        <p className="center">{singleAbout.description}</p>
      </ArticleStyles>
    </>
  );
}

export default function About({ about }) {
  return (
    <>
      <AboutStyles>
        {about.map((singleAbout) => (
          <SingleAboutSection key={singleAbout.id} singleAbout={singleAbout} />
        ))}
      </AboutStyles>
      <Benefits />
    </>
  );
}
