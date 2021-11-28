import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SingleBenefitStyles = styled.div`
  text-align: center;
  margin: 1.5rem;
  flex: 0 0 30%;
  max-width: 30%;
  background: var(--white);
  padding: 2rem;
`;

const BenefitGrid = styled.div`
  padding: 8rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: var(--grey);
`;

export default function Benefits() {
  const benefitQuery = useStaticQuery(graphql`
    query {
      benefit: allSanityBenefit {
        nodes {
          icon
          description
          id
          name
        }
      }
    }
  `);

  const benefits = benefitQuery.benefit.nodes;

  function SingleBenefitSection({ singleBenefit }) {
    return (
      <SingleBenefitStyles>
        <h2>{singleBenefit.name}</h2>
        <p>{singleBenefit.description}</p>
      </SingleBenefitStyles>
    );
  }

  return (
    <BenefitGrid>
      {benefits.map((singleBenefit) => (
        <SingleBenefitSection
          singleBenefit={singleBenefit}
          key={singleBenefit.id}
        />
      ))}
    </BenefitGrid>
  );
}
