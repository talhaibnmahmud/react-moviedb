// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
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

const Home = () => {
  const { state, error, loading, searchTerm, setLoadMore, setSearchTerm } =
    useHomeFetch();

  console.log(state);
  console.log({ loading, error });

  if (error) return <h1>Something went wrong... </h1>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
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

      {state.page < state.total_pages && !loading && (
        <LoadMore text="Load More" callback={() => setLoadMore(true)} />
      )}
    </>
  );
};

export default Home;
