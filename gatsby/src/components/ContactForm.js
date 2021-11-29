/* eslint-disable jsx-a11y/label-has-associated-control */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import styled from 'styled-components';
import ContactStyles from '../styles/ContactStyles';
import useValues from '../utils/useValues';
import dome from '../assets/images/dome.png';

export default function ContactForm() {
  const contact = useStaticQuery(graphql`
    query {
      sanityContact {
        id
        title
        description
        email
        address
        phone
      }
    }
  `);
  const { values, updateValue } = useValues({ maple: '' });
  const mapleErr = 'Robot';

  const ImgStyles = styled.img`
    background: var(--grey);
    margin: 0;
    display: block;
    width: 20rem;
    padding-bottom: 3rem;
  `;

  return (
    <>
      <ContactStyles>
        <div id="contact">
          <ImgStyles src={dome} />
          <h2>{contact.sanityContact.title}</h2>
          <p>{contact.sanityContact.description}</p>
          <p>
            Call:{' '}
            <a href={`tel:${contact.sanityContact.phone}`}>
              {contact.sanityContact.phone}
            </a>
          </p>
          <p>
            Email:{' '}
            <a href={`mailto:${contact.sanityContact.email}`}>
              {contact.sanityContact.email}
            </a>
          </p>
        </div>
        {/* action="/pages/success" for custom success page after form submitted */}
        <form
          name="G&B contact form"
          netlify
          netlify-honeypot="bot-field"
          hidden
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <input
            type="maple"
            name="maple"
            id="maple"
            value={values.maple}
            onChange={updateValue}
            className="maple"
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            minLength="10"
            maxLength="15"
            required
          />
          <label htmlFor="message">Tell us about your project</label>
          <textarea type="text" name="message" required />
          <div>{values.maple ? <p>Error: {mapleErr}</p> : ''}</div>
          {/* TODO: create state for button text */}
          <button type="submit" value="submit">
            Send
          </button>
        </form>
      </ContactStyles>
    </>
  );
}
