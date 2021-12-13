import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeroStyles = styled.div`
  margin-top: 0;
  position: relative;
  width: auto;

  .gatsby-image-wrapper {
    height: 80vh;
    max-width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  .banner {
    display: grid;
    gap: 2rem;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: auto;
    width: 100%;
    bottom: 0;
    text-align: center;
    left: 0;
    z-index: 2;
    padding: 8rem 0;
    color: var(--white);

    h1 {
      font-size: 3em;
      padding-bottom: 1rem;
    }
    span {
      margin-top: 3rem;
    }
    a {
      padding: 1rem;
    }
  }
`;

export default function Hero({ hero }) {
  return (
    <HeroStyles>
      <Img fluid={hero.hero.asset.fluid} alt="Home Page Image" />
      <div className="banner">
        <h1>G & B Contracting</h1>
        <h2>{hero.headline}</h2>
        <span>
          <Link to="#contact" className="button">
            get in touch
          </Link>
        </span>
      </div>
    </HeroStyles>
  );
}
