import { FaHome as icon } from 'react-icons/fa';

export default {
  // Compuer name
  name: 'settings',
  // Visible name
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'headline',
      title: 'Home Page Heading',
      type: 'string',
      description: 'One line heading for the home page',
    },
    {
      name: 'services',
      title: 'Top Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    },
    {
      name: 'projects',
      title: 'Top Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    },
  ],
};
