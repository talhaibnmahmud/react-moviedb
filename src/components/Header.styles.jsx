import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  max-width: 100vw;
`;

const Content = styled.div`
  width: 100vw;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

export { Wrapper, Content, LogoImg, TMDBLogoImg };
