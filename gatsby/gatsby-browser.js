import React from 'react';
import Layout from './src/components/Layout';

// plugin to wrap each page with the Layout
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
