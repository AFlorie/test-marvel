import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { FaBackward, FaForward } from "react-icons/fa";

const SmallScreenPaginate = ({ handlePageClick, totalPages, page }) => {
  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
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

export default SmallScreenPaginate;

const Container = styled.div`
  .pagination {
    padding: 0;
    margin: 1rem auto;
    font-family: "Montserrat", sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
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

  @media (min-width: 381px) {
    display: none;
  }
`;
