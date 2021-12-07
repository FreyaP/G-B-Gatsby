import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import dome from '../assets/images/dome.png';

const NavStyles = styled.nav`
  position: fixed;
  background: var(--white);
  z-index: 5;
  width: 100vw;
  height: 10vh;
  padding-top: 2rem;
  top: 0;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
    text-align: start;
    list-style: none;
    margin-top: -3rem;
  }

  a {
    font-size: 2 rem;
    text-decoration: none;
    &:hover {
      color: var(--orange);
    }
    &[aria-current='page'] {
      color: var(--orange);
    }
    img {
      width: auto;
      height: 10vh;
      margin: 2rem;
      //transform: translateY(-25%); //check on this later if needed
    }
  }
`;

// nav links to pages except for contact which links to class
export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">
            <img src={dome} alt="G&B Logo" />
          </Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
