import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Benefits from './Benefits';

const AboutStyles = styled.div`
  padding: 6rem 6rem 0 6rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: var(--blue);
  color: var(--lightGrey);
  .gatsby-image-wrapper {
    max-height: 600px;
    margin-bottom: -15rem;
  }
`;
const ArticleStyles = styled.article`
  display: grid;
  padding: 6rem;
  h2 {
    align-self: center;
  }
  span {
    text-align: center;
  }
  .button {
    padding: 1rem;
  }
`;
function SingleAboutSection({ singleAbout }) {
  return (
    <>
      <Img fluid={singleAbout.image.asset.fluid} alt={singleAbout.title} />
      <ArticleStyles>
        <h2 className="center">{singleAbout.title}</h2>
        <p className="center">{singleAbout.description}</p>
        <span>
          <a className="button" href="#contact">
            Tell us about your next project
          </a>
        </span>
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
