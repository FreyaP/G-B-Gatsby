import React from 'react';
import SEO from '../components/SEO';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <SEO title="Whistler Contractor" />
      <p>I am the Home Page!! Yay!!</p>
      <Benefits />
      <Testimonials />
    </>
  );
}
