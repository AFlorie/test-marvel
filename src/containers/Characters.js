import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { FaBackward, FaForward } from "react-icons/fa";

import Error from "../components/layout/Error";
import CharacterCard from "../components/CharacterCard";
import LoaderSpinner from "../components/LoaderSpinner";
import SmallScreenPaginate from "../components/SmallScreenPaginate";
import { key, baseUrl } from "../assets/authentification";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const offset = page * itemsPerPage;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `${baseUrl}characters?orderBy=name&limit=${itemsPerPage}&offset=${offset}&ts=1&apikey=${key.public}&hash=${key.hash}`
        );
        setTotalPages(
          Math.ceil(result.data.data.total / result.data.data.limit)
        );
        setCharacters(result.data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [offset]);

  const handlePageClick = (e) => {
    setPage(e.selected);
    setIsLoading(true);
  };

  if (isLoading) return <LoaderSpinner />;
  if (characters.length === 0 && !isLoading) return <Error />;

  return (
    <Container>
      <CharactersList>
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </CharactersList>
      <SmallScreenPaginate
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        page={page}
      />
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel={<FaBackward />}
        nextLabel={<FaForward />}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousClassName={"previous"}
        nextClassName={"next"}
        pageClassName={"pageNb"}
        forcePage={page}
      />
    </Container>
  );
};

export default Characters;

const Container = styled.div`
  .pagination {
    padding: 2rem 0;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    max-width: 800px;
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    @media (max-width: 380px) {
      display: none;
    }
  }

  .pageNb {
    cursor: pointer;
    & :hover {
      color: var(--red);
    }
  }

  .previous,
  .next {
    cursor: pointer;
    & :hover {
      color: var(--red);
    }
  }

  .active {
    font-weight: 900;
    cursor: pointer;
    color: var(--red);
    & :hover {
      color: var(--red);
    }
  }
`;

const CharactersList = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 3.5rem 0 2rem 0;

  & li {
    padding: 0.5rem;
    list-style-type: none;
    background-color: var(--black);
    color: var(--grey);
    border: 2px solid red;
    border-radius: 5px;
  }
`;
