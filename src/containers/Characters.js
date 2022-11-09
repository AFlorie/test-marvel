import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Error from "../components/layout/Error";
import CharacterCard from "../components/CharacterCard";
import LoaderSpinner from "../components/LoaderSpinner";
//to remove
import data from "../remove.json";

const Characters = () => {
  const hash = "d90867f9c05c9ba732a2c85ee9e22ac1";
  const publicKey = "a6a49d6dede014c0ce382698879344a3";

  const [characters, setCharacters] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`
        );

        setCharacters(result.data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  if (isLoading) return <LoaderSpinner />;
  if (characters.length === 0 && !isLoading) return <Error />;

  return (
    <Container>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </Container>
  );
};

export default Characters;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 2rem;
  padding: 3.5rem 0 6rem 0;
`;
