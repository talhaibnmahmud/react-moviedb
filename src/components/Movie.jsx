// import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { useParams } from "react-router";
import { useMovieFetch } from "../hooks/useMovieFetch";

import BreadCrumb from "./BreadCrumb";
// import Grid from "./Grid";
import MovieInfo from "./MovieInfo";
import Spinner from "./Spinner";

// import NoImage from "../images/no-image.jpg";

const Movie = () => {
  const { movieID } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieID);

  console.log(movie);

  if (loading) return <Spinner />;
  if (error) return <>Error!</>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
