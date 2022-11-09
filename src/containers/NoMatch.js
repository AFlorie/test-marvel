import styled from "styled-components";
import bg from "../img/bg.png";

const NoMatch = () => {
  return (
    <Container>
      <section>
        <img src={bg} alt="" />
        <h1>The page you're looking for does not exist...</h1>
      </section>
    </Container>
  );
};

export default NoMatch;

const Container = styled.div`
  & section {
    margin: 4rem auto;

    display: flex;
    justify-content: space-around;
    width: 85%;
  }

  & h1 {
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
    color: var(--grey);
    font-size: 2rem;
    flex-basis: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
  }

  & img {
    width: 45%;
    height: auto;
    flex-basis: 1;
  }

  @media (max-width: 768px) {
    & section {
      width: 100%;
      flex-direction: column;
    }

    & img {
      width: 100%;
    }

    & h1 {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
  } ;
`;
