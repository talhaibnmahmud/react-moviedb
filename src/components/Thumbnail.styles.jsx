import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: opacity 0.3s ease;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
  animation: animateThumbnail 1.75s ease;

  :hover {
    opacity: 0.75;
  }

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { Image };
