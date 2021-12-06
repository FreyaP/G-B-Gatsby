import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ProjectListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin: 4rem 0;
`;

const SingleProjectStyles = styled.div`
  .gatsby-image-wrapper {
    height: 350px;
    opacity: 0.7;
    transition: 1s;
    &:hover {
      opacity: 1;
    }
  }
  h2 {
    color: var(--white);
    text-align: center;
    font-size: 3rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 1;
  }
`;

function SingleProject({ project }) {
  return (
    <SingleProjectStyles>
      <Link to={`/projects/${project.slug.current}`}>
        <h2>
          <span className="mark">{project.name}</span>
        </h2>
        <Img fluid={project.image.asset.fluid} alt={project.name} />
      </Link>
    </SingleProjectStyles>
  );
}
export default function ProjectList({ projects }) {
  return (
    <ProjectListStyles>
      {projects.map((project) => (
        <SingleProject project={project} key={project.id} />
      ))}
    </ProjectListStyles>
  );
}
