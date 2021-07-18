import PropTypes from "prop-types";

import { Wrapper } from "./LoadMore.styles";

const LoadMore = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

LoadMore.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default LoadMore;
