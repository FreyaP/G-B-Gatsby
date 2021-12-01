import { FcProcess as icon } from 'react-icons/fc';

export default {
  // Compuer name
  name: 'process',
  // Visible name
  title: 'Project Process',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Title of Step',
      type: 'string',
      description: 'Name of the step of the work process',
    },
    {
      name: 'description',
      title: 'Description of that step',
      type: 'text',
      description: 'One line description',
    },
    {
      name: 'order',
      title: 'Order in the process',
      type: 'number',
    },
  ],
};
