import React from "react";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="var(--red)"
        width="80"
        strokeWidth="5"
        animationDuration="0.75"
      />
      <h2>Loading...</h2>
    </LoaderContainer>
  );
};

export default LoaderSpinner;

const LoaderContainer = styled.div`
  width: 20%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-top: 20px;
    font-size: 20px;
  }
`;
