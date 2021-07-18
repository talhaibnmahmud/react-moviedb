import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieID, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieID}`}>
          <Image src={image} alt="Thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="Thumbnail" />
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.string,
  movieID: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumbnail;
