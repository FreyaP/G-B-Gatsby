// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity
import services from './services';
import projects from './projects';
import testimonials from './testimonials';
import about from './about';
import contact from './contact';
import settings from './settings';
import benefits from './benefits';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    services,
    projects,
    testimonials,
    about,
    contact,
    settings,
    benefits,
  ]),
});
