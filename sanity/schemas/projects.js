import { FaProjectDiagram as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'project',
  // Visible name
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the Project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Web page name',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description of Project',
      type: 'text',
      description: 'Small blurb about the work involved in this project',
    },
    {
      name: 'service',
      title: 'Services Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    },
  ],
  // Customizes the preview of information shown for each project
  preview: {
    select: {
      title: 'name',
      media: 'image',
      service0: 'service.0.name',
      service1: 'service.1.name',
      service2: 'service.2.name',
    },
    prepare: ({ title, media, ...services }) => {
      const filteredService = Object.values(services).filter(Boolean);
      return {
        title,
        media,
        subtitle: Object.values(filteredService).join(', '),
      };
    },
  },
};
