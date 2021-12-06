import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaHandshake, FaTools } from 'react-icons/fa';

const icons = [FaHeart, FaHandshake, FaTools];

const SingleBenefitStyles = styled.div`
  text-align: center;
  margin: 2rem;
  width: 33%;
  background: var(--white);
  padding: 3rem;

  .icon {
    font-size: 5rem;
    padding: 2rem;
    color: var(--orange);
  }
`;

const BenefitGrid = styled.div`
  padding: 7rem 4rem 15rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: var(--lightGrey);
`;

const BenefitHeading = styled.h2`
  background: var(--lightGrey);
  padding-top: 30rem;
  text-align: center;
  font-size: 3.2rem;
`;

export default function Benefits() {
  const benefitQuery = useStaticQuery(graphql`
    query {
      benefit: allSanityBenefit {
        nodes {
          description
          id
          name
        }
      }
    }
  `);

  const benefits = benefitQuery.benefit.nodes;

  function SingleBenefitSection({ singleBenefit, Icon }) {
    return (
      <SingleBenefitStyles>
        <Icon className="icon" />
        <h2>{singleBenefit.name}</h2>
        <p>{singleBenefit.description}</p>
      </SingleBenefitStyles>
    );
  }

  return (
    <>
      <BenefitHeading>What you can expect from us</BenefitHeading>
      <BenefitGrid>
        {benefits.map((singleBenefit, i) => {
          const Icon = icons[i];
          return (
            <SingleBenefitSection
              singleBenefit={singleBenefit}
              key={singleBenefit.id}
              Icon={Icon}
            />
          );
        })}
      </BenefitGrid>
    </>
  );
}
