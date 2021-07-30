import PropTypes from "prop-types";

import { Component } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import SearchIcon from "../images/search-icon.svg";

class SearchBar extends Component {
  // const [state, setState] = useState("");
  // const initial = useRef(true);

  // useEffect(() => {
  //   if (initial.current) {
  //     initial.current = false;
  //     return;
  //   }

  //   const timer = setTimeout(() => {
  //     setSearchTerm(state);
  //   }, 1000);

  //   return () => clearImmediate(timer);
  // }, [setSearchTerm, state]);

  state = { value: "" };
  timeout = null;

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSearchTerm(value);
      }, 1000);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <Wrapper>
        <Content>
          <img src={SearchIcon} alt="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Movie"
            onChange={(event) =>
              this.setState({ value: event.currentTarget.value })
            }
            value={value}
          />
        </Content>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchBar;
