import { useState } from 'react';

export default function useValues(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      // existing values
      ...values,
      // update new value
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
