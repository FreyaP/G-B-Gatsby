import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SingleProjectStyles = styled.a`
  display: grid;
  position: relative;
  transition: ease-in-out 0.5s;
  :hover {
    transform: scale(110%);
  }
  .gatsby-image-wrapper {
    max-width: 40rem;
    height: auto;
  }
  h3 {
    color: var(--white);
    text-transform: capitalize;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 1;
    padding: 1.5rem 0;
    // fading background on heading for white font to contrast more
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7),
      hsla(0, 0%, 100%, 0) 70%,
      hsla(0, 0%, 100%, 0)
    );
  }
`;

const HomeProjectStyles = styled.div`
  display: grid;
  background: var(--blue);
  grid-template-columns: repeat(auto-fit, minmax(100px, 350px));
  justify-content: space-evenly;
  gap: 2rem;
  margin-bottom: -12rem;
`;

function SingleProject({ project }) {
  const name = `${project.name}`;
  const projectPage = name.replace(' ', '-').toLowerCase();

  return (
    <SingleProjectStyles href={`/projects/${projectPage}`}>
      <h3>{project.name}</h3>
      <Img fluid={project.image.asset.fluid} alt={project.name} />
    </SingleProjectStyles>
  );
}

export default function HomeProjects({ homeProjects }) {
  return (
    <>
      <HomeProjectStyles>
        {homeProjects[0].projects.map((singleProject) => (
          <SingleProject key={singleProject.id} project={singleProject} />
        ))}
      </HomeProjectStyles>
    </>
  );
}
