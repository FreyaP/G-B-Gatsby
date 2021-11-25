import { MdPerson as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'about',
  // Visible name
  title: 'About Us Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'About Us Title',
      type: 'string',
      description: 'Title of About Us Page',
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
      title: 'About Us Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'About Us paragraph',
      type: 'text',
      description: 'Small blurb about G&B Contracting',
    },
  ],
};
