import React from 'react';
import styled from 'styled-components';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

function compareOrder(a, b) {
  return (
    parseInt(a.props.singleStep.order) - parseInt(b.props.singleStep.order)
  );
}

function SingleStep({ singleStep }) {
  return (
    <div className="step-text">
      <h2>{singleStep.name}</h2>
      <p>{singleStep.description}</p>
    </div>
  );
}

const ProcessStyles = styled.div`
  color: var(--white);
  background: var(--blue);
  padding: 15rem 8rem 6rem 8rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3.5rem;

  .icon {
    font-size: 8rem;
    justify-self: end;
  }
  .icon2 {
    grid-row: 2;
  }
  .icon3 {
    grid-row: 3;
  }
  .step-text {
    padding-right: 20rem;
  }
  @media (max-width: 600px) {
    .step-text {
      padding-right: 5rem;
    }
  }

  span {
    grid-column: span 2;
    text-align: center;
    padding-top: 7rem;

    a {
      padding: 1.5rem;
    }
    h3 {
      font-size: 3rem;
      padding-top: 10rem;
    }
  }
`;

export default function Process({ process }) {
  return (
    <>
      <ProcessStyles>
        <RiNumber1 className="icon icon1" />

        <RiNumber2 className="icon icon2" />

        <RiNumber3 className="icon icon3" />

        {process
          .map((singleStep) => (
            <SingleStep key={singleStep.id} singleStep={singleStep} />
          ))
          .sort(compareOrder)}

        <span>
          <a href="#contact" className="button">
            Schedule a consultation
          </a>
          <h3>View our past projects</h3>
        </span>
      </ProcessStyles>
    </>
  );
}
