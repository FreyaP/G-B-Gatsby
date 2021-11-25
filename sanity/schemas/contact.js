import { FaPhoneAlt as icon } from 'react-icons/fa';

export default {
  // Compuer name
  name: 'contact',
  // Visible name
  title: 'Contact Information',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title on Contact Section',
      type: 'string',
      description: 'Create the headline for the contact form',
    },

    {
      name: 'image',
      title: 'Contact Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Contact form paragraph',
      type: 'text',
      description: 'Small paragraph to encourage contact',
    },
    {
      name: 'phone',
      title: 'Business Phone Number',
      type: 'number',
      description: 'Contact number for business',
    },
    {
      name: 'email',
      title: 'Business Email Address',
      type: 'string',
      description: 'Contact email for business',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'string',
      description: 'Contact address for business',
    },
  ],
};
