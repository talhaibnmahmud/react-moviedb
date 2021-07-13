import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieID, clickable }) => {
  return (
    <div>
      <Image src={image} alt="Thumbnail" />
    </div>
  );
};

export default Thumbnail;
