import PropTypes from "prop-types";

import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageURL }) => {
  return (
    <Wrapper>
      <Image src={imageURL} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Actor;
