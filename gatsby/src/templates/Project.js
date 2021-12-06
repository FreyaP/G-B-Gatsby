import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ProjectPageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //margin: 0 6rem;
  text-align: center;
  background: var(--backgroundGrey);
  //smaller screens - 1 columm
  p,
  h2 {
    padding: 1rem;
    margin: 0;
    color: var(--white);
  }
  p {
    padding-bottom: 3rem;
  }
  h2 {
    padding-top: 3rem;
    align-self: end;
  }
  button {
    grid-column: span 2;
    background: white;
    color: var(--black);
    padding-bottom: 1rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: var(--orange);
  }
  .gatsby-image-wrapper {
    max-width: 1000px;
    grid-row: span 2;
  }
`;

export default function ProjectPage({ data: { project } }) {
  return (
    <>
      <SEO title={project.name} image={project.image?.asset?.fluid?.src} />
      <ProjectPageStyles>
        <button type="button" onClick={() => window.history.back()}>
          Back
        </button>
        <Img fluid={project.image.asset.fluid} />
        <h2 className="center">{project.name}</h2>
        <p>{project.description}</p>
      </ProjectPageStyles>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
