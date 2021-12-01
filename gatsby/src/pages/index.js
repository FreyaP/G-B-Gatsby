import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import HomeServices from '../components/HomeServices';
import Process from '../components/Process';

export default function HomePage({ data }) {
  const homeService = data.homeService.nodes;
  const homeProcess = data.process.nodes;
  return (
    <>
      <SEO title="Whistler Contractor" />
      <HomeServices homeServices={homeService} />
      <Process process={homeProcess} />
      <Benefits />
      <Testimonials />
    </>
  );
}

export const query = graphql`
  query HomePage {
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
    process: allSanityProcess {
      nodes {
        id
        name
        order
        description
      }
    }
  }
`;
