import styled from "styled-components";
import { Link } from "react-router-dom";
import marvel from "../../img/marvel.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={marvel} alt="Marvel Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/creators">Creators</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: var(--black);

  & img {
    height: 3rem;
    margin: 0 auto;
  }

  & nav {
    font-family: "Roboto Condensed", sans-serif;
    background-color: var(--black);
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--grey);

    & ul {
      width: min(800px, 100%);
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (max-width: 380px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  & li {
    color: var(--grey);
    list-style-type: none;
    padding: 10px 0;
    text-align: center;
    border-bottom: 3px solid var(--black);
  }

  & li:hover,
  .selected {
    color: white;
    border-bottom: 3px solid var(--red);
  }
`;
