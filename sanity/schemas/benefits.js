import { BsFillStarFill as icon } from 'react-icons/bs';

const link = 'https://react-icons.github.io/react-icons/';

export default {
  // Compuer name
  name: 'benefit',
  // Visible name
  title: 'Benefits',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Benefit Name',
      type: 'string',
      description: 'Name of the benefit or value to customer',
    },

    {
      name: 'icon',
      title: 'Benefit Icon',
      type: 'string',
      description: `Find a Font Awesome icon from ${link}. Copy the name of icon and paste below i.e. "FaApple". NOTE: first two letters must be "Fa"`,
    },
    {
      name: 'description',
      title: 'Description of Benefit',
      type: 'text',
      description: 'Small blurb about what the vaule or benefit is to customer',
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
