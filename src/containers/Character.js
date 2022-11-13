import React, { useState, useEffect } from "react";
import axios from "axios";
import LoaderSpinner from "../components/LoaderSpinner";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { key, baseUrl } from "../assets/authentification";

const Character = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `${baseUrl}characters/${id}?ts=1&apikey=${key.public}&hash=${key.hash}`
        );

        setCharacter(result.data.data.results[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  if (isLoading) return <LoaderSpinner />;

  return (
    <Container>
      {character.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
        <img
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          alt={character.name}
        />
      )}

      <section>
        <h1>{character.name}</h1>
        <p>
          {!character.description
            ? "No description available"
            : character.description}
        </p>
      </section>
    </Container>
  );
};

export default Character;

const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;

  & h1 {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  p {
    line-height: 1.5;
  }

  @media (min-width: 426px) {
    height: unset;
    position: unset;
    padding-top: 1rem;

    & img {
      width: 50%;
      max-height: 70vh;
      object-fit: cover;
      margin: auto;
    }
  }

  @media (min-width: 769px) {
    width: 95%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    & section {
      width: 100%;
      text-align: left;
    }

    & h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }
  }
`;
