import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import HomeServices from '../components/HomeServices';

export default function HomePage({ data }) {
  const homeService = data.homeService.nodes;
  return (
    <>
      <SEO title="Whistler Contractor" />
      <HomeServices homeServices={homeService} />
      <Benefits />
      <Testimonials />
    </>
  );
}

export const query = graphql`
  query HomeServices {
    homeService: allSanitySettings {
      nodes {
        services {
          id
          name
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
  }
`;
