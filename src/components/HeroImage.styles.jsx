import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

const Text = styled.div`
  z-index: 99;
  max-width: 720px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--font-xl);

    @media screen and max-width(max-width: 720px) {
      font-size: var(--font-xl);
    }
  }

  p {
    font-size: var(--font-md);

    @media screen and (max-width: 720px) {
      font-size: var(--font-base);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export { Wrapper, Content, Text };
