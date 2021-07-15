import styled from "styled-components";

const Spinner = styled.div`
  margin: 20px auto;
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--midGraey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Spinner };
