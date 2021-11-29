import { BsFillStarFill as icon } from 'react-icons/bs';

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
      name: 'description',
      title: 'Description of Benefit',
      type: 'text',
      description: 'Small blurb about what the vaule or benefit is to customer',
    },
  ],
};
