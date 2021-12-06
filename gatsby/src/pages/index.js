import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import HomeServices from '../components/HomeServices';
import Process from '../components/Process';
import HomeProjects from '../components/HomeProjects';
import Hero from '../components/Hero';

export default function HomePage({ data }) {
  const homeService = data.homeService.nodes;
  const homeProcess = data.process.nodes;
  const homeProjects = data.projects.nodes;
  const homeTestimonials = data.testimonials.nodes;
  const hero = data.hero.nodes[0];
  return (
    <>
      <SEO title="Whistler Contractor" />
      <Hero hero={hero} />
      <HomeServices homeServices={homeService} />
      <Process process={homeProcess} />
      <HomeProjects homeProjects={homeProjects} />
      <Benefits />
      <Testimonials homeTestimonials={homeTestimonials} />
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
    projects: allSanitySettings {
      nodes {
        projects {
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
    testimonials: allSanitySettings {
      nodes {
        testimonials {
          id
          name
          profession
          testimonial
        }
      }
    }
    hero: allSanitySettings {
      nodes {
        headline
        hero {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
