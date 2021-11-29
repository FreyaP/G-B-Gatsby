import styled from 'styled-components';

const ContactStyles = styled.div`
  background: var(--grey);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding: 8rem 5rem;
  padding-top: 10rem;
  //align-items: center;
  #contact {
    justify-self: center;
  }
  form {
    display: grid;

    input {
      margin-bottom: 2rem;
    }
    button {
      margin-top: 1rem;
      padding: 1rem 2rem;
      justify-self: start;
    }
    .maple {
      display: none;
    }
  }

  // media query for smaller screen - from 2 cols to 1
`;

export default ContactStyles;
