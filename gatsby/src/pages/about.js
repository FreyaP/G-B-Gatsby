import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/About';
import SEO from '../components/SEO';

export default function AboutPage({ data }) {
  const about = data.about.nodes;
  return (
    <>
      <SEO title="About" />
      <About about={about} />
    </>
  );
}
export const query = graphql`
  query AboutQuery {
    about: allSanityAbout {
      nodes {
        id
        title
        description
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
