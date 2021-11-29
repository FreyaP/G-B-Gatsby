import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components';

export default function Testimonials() {
  const testimonialQuery = useStaticQuery(graphql`
    query {
      testimonial: allSanityTestimonial {
        nodes {
          id
          name
          profession
          testimonial
        }
      }
    }
  `);

  const testimonials = testimonialQuery.testimonial.nodes;
  const TestimonialsGrid = styled.div`
    background: var(--blue);
    color: var(--lightGrey);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem 6rem;
    padding: 7rem 1rem;
    h2 {
      grid-column: span 2;
    }
  `;

  const SingleTestimonialStyles = styled.div`
    display: grid;
    padding: 4rem;
    align-content: center;
    gap: 1rem;

    .icon {
      color: var(--orange);
      margin: 0 1rem;
    }
    .name {
      font-weight: bold;
      align-self: end;
    }
  `;

  function SingleTestimonial({ singleTestimonial }) {
    return (
      <SingleTestimonialStyles>
        <p>
          <FaQuoteLeft className="icon" />
          {singleTestimonial.testimonial}
          <FaQuoteRight className="icon" />
        </p>
        <p className="name">
          {singleTestimonial.name}, {singleTestimonial.profession}
        </p>
      </SingleTestimonialStyles>
    );
  }

  return (
    <TestimonialsGrid>
      <h2 className="center">What our clients say</h2>

      {testimonials.map((singleTestimonial) => (
        <SingleTestimonial
          singleTestimonial={singleTestimonial}
          key={singleTestimonial.id}
        />
      ))}
    </TestimonialsGrid>
  );
}