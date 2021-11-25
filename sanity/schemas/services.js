import { GiHammerNails as icon } from 'react-icons/gi';

export default {
  // Compuer name
  name: 'service',
  // Visible name
  title: 'Services',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Service Name',
      type: 'string',
      description: 'Name of the Service',
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
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description of Service',
      type: 'text',
      description: 'Small blurb about the service offered',
    },
  ],
  /*
  preview: {
      select: {
          name: 'name',
          image: 'image',
      },
      prepare: ({ name, image }) => ({
          title: `${name}`
      })

  } */
};
