import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { useParams } from "react-router";
import { useMovieFetch } from "../hooks/useMovieFetch";

import Actor from "./Actor";
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import MovieInfoBar from "./MovieInfoBar";
import MovieInfo from "./MovieInfo";
import Spinner from "./Spinner";

import NoImage from "../images/no-image.jpg";

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
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageURL={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
