import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

// make pages for the projects with set number per page
async function turnProjectsIntoPages({ graphql, actions }) {
  // 1. Query all projects
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // TODO: Turn each project into own page
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      component: resolve('./src/templates/Project.js'),
      path: `/projects/${project.slug.current}`,
      context: {
        name: project.name,
        slug: project.slug.current,
      },
    });
  });
  // TODO: make Project.js template
  // 3. Figure out how many pages there are based on how many slicemasters there are, and how many per page! parseInt turns into number
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.projects.totalCount / pageSize);
  console.log(
    `There are ${data.projects.totalCount} projects and we have ${pageCount} pages with ${pageSize} per page`
  );
  // 4. Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`creating page ${i}`);
    actions.createPage({
      path: `/projects/${i + 1}`,
      component: path.resolve('./src/pages/projects.js'),
      // pass data to template
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  await turnProjectsIntoPages(params);
}