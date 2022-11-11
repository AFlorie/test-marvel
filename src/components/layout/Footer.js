import styled from "styled-components";

//const date = new Date();
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <p>Data provided by Marvel </p>
      <p>© Marvel {year}</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: auto;
  width: 100%;
  background-color: var(--black);
  color: var(--grey);
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
