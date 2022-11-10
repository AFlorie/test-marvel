import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import noPicture from "../img/noPicture.png";

const CharacterCard = ({ character }) => {
  let navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Container onClick={() => handleNavigate(character.id)}>
      <img
        src={
          character.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ? `${noPicture}`
            : `${character.thumbnail.path}.${character.thumbnail.extension}`
        }
        alt={`profil de ${character.name}`}
      />
      <p>{character.name}</p>
    </Container>
  );
};

export default CharacterCard;

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
    padding-top: 0.5rem;

    color: var(--grey);
  }

  :hover {
    outline: 3px solid var(--red);
    cursor: pointer;

    & p {
      color: var(--red);
    }
  }
`;
