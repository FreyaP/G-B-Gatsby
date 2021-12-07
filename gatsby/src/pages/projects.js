import { graphql } from 'gatsby';
import React from 'react';
import Pagination from '../components/Pagination';
import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

export default function ProjectsPage({ data, pageContext }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title={`Projects - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.projects.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/projects"
      />
      <ProjectList projects={projects} />
    </>
  );
}

export const query = graphql`
  query ProjectQuery($skip: Int = 0, $pageSize: Int = 6) {
    projects: allSanityProject(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        description
        id
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
        service {
          name
        }
      }
    }
  }
`;
