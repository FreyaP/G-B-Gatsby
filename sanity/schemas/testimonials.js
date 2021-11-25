import { BsFillChatQuoteFill as icon } from 'react-icons/bs';

export default {
  // Computer name
  name: 'testimonial',
  // Visible name
  title: 'Testimonials',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of Person',
      type: 'string',
      description: 'Name of person writing testimonial',
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
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      description: 'Enter the testimonial',
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
      description: 'Profession of person',
    },
  ],
  // Customizes the preview of information shown for each project
  preview: {
    select: {
      title: 'name',
      profession: 'profession',
    },
    prepare: ({ title, profession }) => ({
      title,
      subtitle: profession,
    }),
  },
};
