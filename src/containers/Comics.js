import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Error from "../components/layout/Error";
import LoaderSpinner from "../components/LoaderSpinner";
import { key } from "../assets/authentification";
import ComicCard from "../components/ComicCard";

//to remove
import comicsdata from "../comicsdata.json";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${key.public}&hash=${key.hash}`
        );

        setComics(result.data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  if (isLoading) return <LoaderSpinner />;
  if (comics.length === 0 && !isLoading) return <Error />;
  return (
    <Container>
      {comics.map((comic) => {
        return <ComicCard key={comic.id} comic={comic} />;
      })}
    </Container>
  );
};

export default Comics;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 3.5rem 0 6rem 0;
`;
