import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

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
      <>
        <h2>{singleBenefit.name}</h2>
        <p>{singleBenefit.description}</p>
      </>
    );
  }

  return (
    <>
      {benefits.map((singleBenefit) => (
        <SingleBenefitSection
          singleBenefit={singleBenefit}
          key={singleBenefit.id}
        />
      ))}
    </>
  );
}
