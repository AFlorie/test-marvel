import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import noCover from "../img/noCover.png";

const ComicCard = ({ comic }) => {
  let navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Container onClick={() => handleNavigate(comic.id)}>
      <img
        src={
          comic.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ? `${noCover}`
            : `${comic.thumbnail.path}.${comic.thumbnail.extension}`
        }
        alt={comic.name}
      />
      <p>{comic.title}</p>
    </Container>
  );
};

export default ComicCard;

const Container = styled.div`
  border: 2px solid var(--red);
  background-color: var(--black);
  border-radius: 5px;

  & img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  & p {
    text-align: center;
    padding: 0.5rem;

    color: var(--grey);
  }
`;
