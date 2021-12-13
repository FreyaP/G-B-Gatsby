import styled from 'styled-components';

const ContactStyles = styled.div`
  background: var(--grey);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding: 8rem 5rem;
  padding-top: 10rem;
  .image {
    background: var(--grey);
    margin: 0;
    display: block;
    width: 20rem;
    padding-bottom: 3rem;
  }
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
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default ContactStyles;
