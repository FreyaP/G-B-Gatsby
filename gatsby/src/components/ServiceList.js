import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ServiceGridStyles = styled.div`
  background-color: var(--grey);
  display: grid;
  //grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  grid-auto-rows: auto auto 300px;
`;

const ServiceStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto 300px;
  }
  grid-template-rows: subgrid;
  grid-row: span 3;
  gap: 2rem;

  h2 {
    margin-top: 5rem;
    padding: 1rem;
  }
  p {
    margin-top: 0;
    padding: 0 2rem;
  }
  background-color: var(--grey);
  //color: white;
`;

function SingleService({ service }) {
  return (
    <ServiceStyles>
      <h2 className="center">{service.name}</h2>
      <p>{service.description}</p>
      <Img fluid={service.image.asset.fluid} alt={service.name} />
    </ServiceStyles>
  );
}

export default function ServiceList({ services }) {
  return (
    <ServiceGridStyles>
      {services.map((service) => (
        <SingleService key={service.id} service={service} />
      ))}
    </ServiceGridStyles>
  );
}
