import styled from "styled-components";
import universe from "../../img/universe.png";

const Error = () => {
  return (
    <Container>
      <section>
        <img src={universe} alt="" />
        <h1>Ooops! Something went wrong...</h1>
      </section>
    </Container>
  );
};

export default Error;

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
