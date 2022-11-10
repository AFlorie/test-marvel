import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Error from "../components/layout/Error";
import LoaderSpinner from "../components/LoaderSpinner";
import { key } from "../assets/authentification";

const Creators = () => {
  const [creators, setCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `http://gateway.marvel.com/v1/public/creators?ts=1&apikey=${key.public}&hash=${key.hash}`
        );

        setCreators(result.data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  if (isLoading) return <LoaderSpinner />;
  if (creators.length === 0 && !isLoading) return <Error />;
  return (
    <Container>
      {creators.map((creator) => {
        return <li>{creator.fullName}</li>;
      })}
    </Container>
  );
};

export default Creators;

const Container = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 3.5rem 0 6rem 0;

  & li {
    padding: 0.5rem;
    list-style-type: none;
    background-color: var(--black);
    color: var(--grey);
    border: 2px solid red;
  }
`;
