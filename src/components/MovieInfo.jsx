import PropTypes from "prop-types";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

import { Wrapper, Content, Text } from "./MovieInfo.styles";
import Thumbnail from "./Thumbnail";

import NoImage from "../images/no-image.jpg";

const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumbnail
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />

        <Text>
          <h1>{movie.title}</h1>
          <h3>Plot: </h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>Rating</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>Director{movie.directors.length > 1 ? "s" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
