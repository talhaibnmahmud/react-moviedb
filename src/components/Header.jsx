import RMDBLogo from "../images/react-movie-logo.svg";
import TMDBLogo from "../images/tmdb-logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="RMDB-LOGO" />
        <TMDBLogoImg src={TMDBLogo} alt="TMDB-Logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
