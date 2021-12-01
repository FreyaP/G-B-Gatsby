import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SingleServiceStyles = styled.a`
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
    // fading background on heading
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7),
      hsla(0, 0%, 100%, 0) 70%,
      hsla(0, 0%, 100%, 0)
    );
  }
`;

const HomeServiceStyles = styled.div`
  display: grid;
  background: var(--blue);
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  justify-content: space-evenly;
  gap: 3rem;
  //margin: 0 0 7rem 0;
  //margin-bottom: -12rem;
  padding-top: 10rem;
`;
const HeadingStyles = styled.h2`
  background: var(--blue);
  margin: 0;
  color: var(--white);
  padding-top: 5rem;
`;

function SingleService({ service }) {
  return (
    <SingleServiceStyles href="/services">
      <h3>{service.name}</h3>
      <Img fluid={service.image.asset.fluid} alt={service.name} />
    </SingleServiceStyles>
  );
}

export default function HomeServices({ homeServices }) {
  return (
    <>
      <HeadingStyles className="center">What we do</HeadingStyles>
      <HomeServiceStyles>
        {homeServices[0].services.map((singleService) => (
          <SingleService key={singleService.id} service={singleService} />
        ))}
      </HomeServiceStyles>
    </>
  );
}
