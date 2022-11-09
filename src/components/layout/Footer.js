import styled from "styled-components";

//const date = new Date();
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <p>Data provided by Marvel © Marvel {year}</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--black);
  color: var(--grey);
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
