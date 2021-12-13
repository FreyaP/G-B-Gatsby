import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ProjectListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 4rem 0;
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const SingleProjectStyles = styled.div`
  .image-container {
    overflow: hidden;
  }
  .gatsby-image-wrapper {
    height: 30vh;
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
  a {
    display: grid;
    text-decoration: none;
    position: relative;
  }
  h2 {
    color: var(--white);
    text-transform: capitalize;
    font-size: 3rem;
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 1;
    padding: 1.5rem 0;
    // fading background on heading for white font to contrast more
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8),
      hsla(0, 0%, 100%, 0) 90%,
      hsla(0, 0%, 100%, 0)
    );
  }
`;

function SingleProject({ project }) {
  return (
    <SingleProjectStyles>
      <Link to={`/projects/${project.slug.current}`}>
        <h2>{project.name}</h2>
        <div className="image-container">
          <Img fluid={project.image.asset.fluid} alt={project.name} />
        </div>
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
