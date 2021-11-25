import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `G&B Contracting`,
    siteUrl: `https://www.gandbcontracting.com`,
    description: `G&B Contracting is a Sea to Sky based general contracting company. Hire with confidence for renovations, installs and builds.`,
    twitter: '@GBContracting',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // name of plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'gc7mn67f',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
