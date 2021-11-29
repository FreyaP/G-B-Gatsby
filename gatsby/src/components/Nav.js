import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import dome from '../assets/images/dome.png';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-top: -6rem;
  }
  /*
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 0deg;
      justify-self: start;
    }
    &:nth-child(2) {
      --rotate: 1deg;
    }
    &:nth-child(3) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 0deg;
    }
  }
  */
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--orange);
    }
    &[aria-current='page'] {
      color: var(--orange);
    }
    img {
      width: 15rem;
      height: auto;
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
