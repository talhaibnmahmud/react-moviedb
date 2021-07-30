// Hooks
// import { useHomeFetch } from "../hooks/useHomeFetch";
// React
import { Component } from "react";
// API
import API from "../API";
// Configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Images
import NoImage from "../images/no-image.jpg";
// Components
import Grid from "./Grid";
import HeroImage from "./HeroImage";
import LoadMore from "./LoadMore";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import Thumbnail from "./Thumbnail";

class Home extends Component {
  // const { state, error, loading, searchTerm, setLoadMore, setSearchTerm } =
  //   useHomeFetch();

  // console.log(state);
  // console.log({ loading, error });

  initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  state = {
    movies: this.initialState,
    searchTerm: "",
    isLoadMore: false,
    loading: false,
    error: false,
  };

  fetchMovies = async (page, searchTerm = "") => {
    try {
      this.setState({ error: false, loading: true });

      const movies = await API.fetchMovies(searchTerm, page);
      //   console.log(movies);

      this.setState((prev) => ({
        ...prev,
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results],
        },
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  handleSearch = (searchTerm) => {
    this.setState({ movies: this.initialState, searchTerm }, () => {
      this.fetchMovies(1, this.state.searchTerm);
    });
  };

  handleLoadMore = () => {
    this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
  };

  componentDidMount() {
    this.fetchMovies(1);
  }

  render() {
    const { searchTerm, movies, loading, error } = this.state;

    if (error) return <h1>Something went wrong... </h1>;

    return (
      <>
        {!searchTerm && movies.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
            title={movies.results[0].original_title}
            text={movies.results[0].overview}
          />
        ) : null}

        <SearchBar setSearchTerm={this.handleSearch} />

        <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
          {movies.results.map((movie) => (
            <Thumbnail
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieID={movie.id}
            />
          ))}
        </Grid>

        {loading && <Spinner />}

        {movies.page < movies.total_pages && !loading && (
          <LoadMore text="Load More" callback={this.handleLoadMore} />
        )}
      </>
    );
  }
}

export default Home;
