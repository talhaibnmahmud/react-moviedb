import { Wrapper } from "./LoadMore.styles";

const LoadMore = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default LoadMore;
