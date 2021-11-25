import React from 'react';
import { graphql } from 'gatsby';
import ServiceList from '../components/ServiceList';
import SEO from '../components/SEO';

export default function ServicesPage({ data }) {
  const services = data.services.nodes;

  return (
    <>
      <SEO title="Services" />
      <ServiceList services={services} />
    </>
  );
}

export const query = graphql`
  query ServiceQuery {
    services: allSanityService {
      nodes {
        id
        name
        description
        slug {
          current
        }
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
